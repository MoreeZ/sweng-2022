from fastapi import FastAPI
import os
import uvicorn
from pydantic import BaseModel
from fastapi.responses import FileResponse
from pickle import load
import pandas as pd
import math
# Creating FastAPI instance
app = FastAPI()
path = "C:/House-Price-predictor/api-test" 

class request_body(BaseModel):
    bathroomcnt : int
    bedroomcnt: int
    finishedsquarefeet12:float
    taxamount : float
    yearbuilt: int
    house_price: float


class request_body_xgb(BaseModel):
    bathroomcnt : int
    bedroomcnt: int
    calculatedfinishedsquarefeet: float
    finishedsquarefeet12:float
    yearbuilt: int
    structuretaxvaluedollarcnt: float
    taxamount : float  
    house_price: float

@app.post('/predict')
def predict(data : request_body):
    csv_file_path = os.path.join(path,'reg.pkl')
    model = load(open('reg.pkl', 'rb'))
    X_test_scaled = pd.DataFrame([[data.bathroomcnt,data.bedroomcnt,data.finishedsquarefeet12,data.taxamount,data.yearbuilt]],
                         columns=["bathroomcnt", "bedroomcnt", 
                         "finishedsquarefeet12", "taxamount", "yearbuilt"])
    logerror = model.predict(X_test_scaled)[0]
    # Return the Result
    Zestimate=math.exp(math.log(data.house_price)+logerror)
    return {"Pridicted house price":Zestimate}


@app.post('/predict-stacking')
def predict(data : request_body_xgb):
    csv_file_path = os.path.join(path,'XGB&GBM.pkl')
    model = load(open('XGB&GBM.pkl', 'rb'))
    X_test_scaled = pd.DataFrame([[data.bathroomcnt,data.bedroomcnt,data.calculatedfinishedsquarefeet,
    data.finishedsquarefeet12,data.yearbuilt,data.structuretaxvaluedollarcnt,data.taxamount]],
                         columns=["bathroomcnt", "bedroomcnt", "calculatedfinishedsquarefeet",
                         "finishedsquarefeet12", "yearbuilt","structuretaxvaluedollarcnt",
                         "taxamount"])
    logerror = model.predict(X_test_scaled)[0]
    # Return the Result
    Zestimate=math.exp(math.log(data.house_price)+logerror)
    return {"Pridicted house price":Zestimate}

