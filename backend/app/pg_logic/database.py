from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine, String, Integer, Column
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel

# Create the SQLAlchemy engine for connecting to the PostgreSQL database
engine = create_engine("postgresql://user:dbpassword@localhost/db", echo=True)

# Create a base class for declarative SQLAlchemy models
Base = declarative_base()

# Create a session factory for creating database sessions
SessionLocal = sessionmaker(bind=engine)

# Define a Pydantic BaseModel for the Profile model
class Profile(BaseModel):
    # Define the fields and their types
    id: int
    openness: int
    conscientiousness: int
    extraversion: int
    agreeableness: int
    neuroticism: int

    # Configure the Pydantic model to work with SQLAlchemy ORM
    class Config:
        orm_mode = True


