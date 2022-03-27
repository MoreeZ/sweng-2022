from fastapi import FastAPI
import os
import uvicorn
import csv 
import json
from pydantic import BaseModel
from fastapi.responses import FileResponse
from pickle import load
import pandas as pd
import math
# Creating FastAPI instance
app = FastAPI()
path = "C:/House-Price-predictor/api-test" 

@app.post('/predict')
def predict(bathroomcnt : int, bedroomcnt: int, finishedsquarefeet12:float,taxamount : float,yearbuilt: int, house_price: float ):
    csv_file_path = os.path.join(path,'reg.pkl')
    model = load(open('reg.pkl', 'rb'))
    X_test_scaled = pd.DataFrame([[bathroomcnt,bedroomcnt,finishedsquarefeet12,taxamount,yearbuilt]],
                         columns=["bathroomcnt", "bedroomcnt", "finishedsquarefeet12", "taxamount", "yearbuilt"])
    logerror = model.predict(X_test_scaled)[0]
    # Return the Result
    Zestimate=math.exp(math.log(house_price)+logerror)
    return {"log error":logerror,"Pridicted house price":Zestimate}

@app.get('/sample-inputs')
def get_sample_inputs_csv():
    csv_file_path = os.path.join(path,'finalDataset.csv')
    if os.path.exists(csv_file_path):
        return FileResponse('finalDataset.csv')
    return {"error" : "File not found!"}

@app.get('/sample-inputs-JSON-array')
def sample_inputs_JSON_arr():
    jsonArray = []
    csv_file_path = os.path.join(path,'finalDataset.csv')

    if os.path.exists(csv_file_path):
        with open(csv_file_path, encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row,element in enumerate(csvReader):
                if row < 100:
                  jsonArray.append(element)

        return jsonArray

@app.get('/sample-inputs-JSON')
def sample_inputs_JSON():
    jsonArray = []
    csv_file_path = os.path.join(path,'finalDataset.csv')

    if os.path.exists(csv_file_path):
        with open(csv_file_path, encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                  jsonArray.append(row)
        with open(r'data.json', 'w', encoding='utf-8') as jsonf: 
            jsonString = json.dumps(jsonArray, indent=4)
            jsonf.write(jsonString)
        return FileResponse('data.json')
    return {"error" : "File not found!"}



