from typing import List
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import database
import models
import schemas

# Create database tables automatically
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Coffee Brew Tracker API")

# Allow React app to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/brews", response_model=List[schemas.BrewResponse])
def get_all_brews(db: Session = Depends(database.get_db)):
    brews = db.query(models.Brew).all()
    return brews

@app.post("/brews", response_model=schemas.BrewResponse)
def create_brew(brew: schemas.BrewCreate, db: Session = Depends(database.get_db)):
    # Convert BrewCreate schema to model
    db_brew = models.Brew(**brew.model_dump())  # Ensure your schemas have model_dump() method
    db.add(db_brew)
    db.commit()
    db.refresh(db_brew)
    return db_brew

@app.delete("/brews/{brew_id}")
def delete_brew(brew_id: int, db: Session = Depends(database.get_db)):
    db_brew = db.query(models.Brew).filter(models.Brew.id == brew_id).first()
    if not db_brew:
        raise HTTPException(status_code=404, detail="Brew not found")
    db.delete(db_brew)
    db.commit()
    return {"message": "Brew deleted successfully"}