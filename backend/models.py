from datetime import datetime, timezone
from sqlalchemy import Column, DateTime, Float, Integer, String

from database import Base

class Brew(Base):
    __tablename__ = "brews"

    id = Column(Integer, primary_key=True, index=True)
    bean_name = Column(String, index=True, nullable=False)
    brew_method = Column(String, nullable=False)  # e.g., V60, Espresso, French Press, Aeropress
    grind_size = Column(String, nullable=True)
    coffee_grams = Column(Float, nullable=False)
    water_grams = Column(Float, nullable=False)
    notes = Column(String, nullable=True)
    created_at = Column(
        DateTime, default=lambda: datetime.now(timezone.utc), nullable=False
    )