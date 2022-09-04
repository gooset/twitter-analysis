from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine, String, Integer, Column
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel

engine=create_engine("postgresql://user:dbpassword@localhost/db",
    echo=True
)

Base=declarative_base()


SessionLocal=sessionmaker(bind=engine)


class Profile(BaseModel): 
    id:int
    openness:int
    conscientiousness:int
    extraversion:int
    agreeableness:int
    neuroticism:int
    
    class Config:
        orm_mode=True

