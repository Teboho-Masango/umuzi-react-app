from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


# Base properties shared across schemas
class BrewBase(BaseModel):
    bean_name: str
    brew_method: str
    grind_size: Optional[str] = None
    coffee_grams: float
    water_grams: float
    notes: Optional[str] = None


# Properties expected when creating a new brew
class BrewCreate(BrewBase):
    pass


# Properties returned to the client (includes id and timestamp)
class BrewResponse(BrewBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
