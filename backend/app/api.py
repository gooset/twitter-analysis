from fastapi import FastAPI, File, UploadFile, status, HTTPException
from typing import Optional, List
from fastapi.middleware.cors import CORSMiddleware
from elasticsearch import Elasticsearch
from datetime import datetime 
import os, json, path
import torch
import numpy as np
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
from app.pg_logic.database import SessionLocal
import app.pg_logic.models as models

es = Elasticsearch()
db = SessionLocal()
app = FastAPI()

origins = ["http://localhost:3000",
        "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.get("/tweets/")
async def get_tweets():
    resp = es.search(
        index="my_index",
        sort={"created_at": {"order": "desc"}},
        size=10
    )

    hits = []
    for hit in resp['hits']['hits']:
        user_id = hit["_source"]["user_id"]
        user = db.query(models.Profile).filter(models.Profile.id==user_id).first()
        if user is None:
            params = {
                    "openness": 1, 
                    "conscientiousness": 1,
                    "extraversion": 1, 
                    "agreeableness": 1, 
                    "neuroticism": 1
                    }
        else:
            params = user.dict()

        hit["_source"].update(params)
        hits.append(hit["_source"])

    return { "data": hits }


@app.get("/user/")
async def get_tweets_by_user(username: str):
    resp = es.search(
        index="my_index",
        sort={"created_at": {"order": "desc"}},
        size=100,
        body={"query": {"match": {"username": username}}}
    )

    hits = []
    for hit in resp['hits']['hits']:
        hits.append(hit["_source"])

    return { "data": hits }
    

@app.get("/profile/")
async def get_all_profile():
    items = db.query(models.Profile).all()
    return { "data": [item.dict() for item in items] }

app.get("/profile/{category}", tags=["profile"])
async def get_profile_by_category(category: str, val: int):
    items = db.query(models.Profile).filter_by(category==val)
    return { "data": [item.dict() for item in items]}

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


app.get("/search/")
async def get_search(term: str):
    resp = es.search(
        index="my_index",
        sort={"created_at": {"order": "desc"}},
        size=10,
        body={"query": {"match": {"tweet_content": {"query": term}}}}
    )
    hits = []
    for hit in resp['hits']['hits']:
        user_id = hit["_source"]["user_id"]
        user = db.query(models.Profile).filter(models.Profile.id==user_id).first()
        if user is None:
            params = {
                    "openness": 1, 
                    "conscientiousness": 1,
                    "extraversion": 1, 
                    "agreeableness": 1, 
                    "neuroticism": 1
                    }
        else:
            params = user.dict()

        hit["_source"].update(params)
        hits.append(hit["_source"])

    return { "data": hits }    



home = str(pathlib.Path.home())
model_dir = f'{home}/Transformer_model'
serialized_file = "pytorch_model.bin"
model_pt_path = os.path.join(model_dir, serialized_file)

model = DistilBertForSequenceClassification.from_pretrained(
            model_dir).to(device)
tokenizer = DistilBertTokenizer.from_pretrained(
            'distilbert-base-uncased', do_lower_case=True)


def ingest_db(param):
    id = int(param["id"])
    item = db.query(models.Profile).filter(models.Profile.id==id).first()
    if item is None:
        new_item = models.Profile(
            id=id,
            openness=param['openness'],
            conscientiousness=param['conscientiousness'],
            extraversion=param['extraversion'],
            agreeableness=param['agreeableness'],
            neuroticism=param['neuroticism']
        )
        db.add(new_item)
    else:
        item.openness = param['openness']
        item.conscientiousness = param['conscientiousness']
        item.extraversion = param['extraversion']
        item.agreeableness = param['agreeableness']
        item.neuroticism = param['neuroticism']
    db.commit()
    return item


@app.get("/profile/{user_id}")
async def inference(user_id: str):
    # contents = await file.read()
    # contents = contents.decode("utf-8", 'ignore')
    # # with open(f'{file.filename}') as f:
    # #     data = f.read()

    resp = es.search(
        index="my_index",
        sort={"created_at": {"order": "desc"}},
        size=70,
        body={"query": {"match": {"user_id": user_id}}}
    )

    hits = []
    for hit in resp['hits']['hits']:
        hits.append(hit["_source"]["tweet_content"])

    contents = " ".join(hits)
    inputs = tokenizer.encode_plus(
        contents,
        add_special_tokens=True,
        max_length=512,
        truncation=True,
        padding=True,
        return_tensors="pt",
    )
    input_ids = inputs["input_ids"]
    attention_mask = inputs["attention_mask"]
    with torch.no_grad():
        logits = model(input_ids, attention_mask).logits
        sigmoid = torch.nn.Sigmoid()
        probs = sigmoid(torch.Tensor(logits))
        pred = np.zeros(probs.shape)
        pred[np.where(probs > 0.5)] = 1
        param = {"id": f'{user_id}',
                "extraversion": pred[0][0], 
                "openness": pred[0][1],
                "conscientiousness": pred[0][2],
                "agreeableness": pred[0][3],
                "neuroticism": pred[0][4]
                }
    ingest = ingest_db(param)
    return "ok"
    
    
    
