from sqlalchemy.sql.expression import null
from .database import Base
from sqlalchemy import BIGINT, INTEGER, VARCHAR, String, Column

class Profile(Base):
    __tablename__='profil'
    id=Column(BIGINT,primary_key=True)
    openness=Column(INTEGER,nullable=False)
    conscientiousness=Column(INTEGER, nullable=False)
    extraversion=Column(INTEGER, nullable=False)
    agreeableness=Column(INTEGER, nullable=False)
    neuroticism=Column(INTEGER, nullable=False)

    def dict(self):
        return {
            'user_id': self.id,
            'openness': self.openness,
            'conscientiousness': self.conscientiousness,
            'extraversion': self.extraversion,
            'agreeableness': self.agreeableness,
            'neuroticism': self.neuroticism    
        }
