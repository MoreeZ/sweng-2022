from fastapi import FastAPI
import os
import uvicorn
import csv 
import json
from pydantic import BaseModel
from fastapi.responses import FileResponse

 
# Creating FastAPI instance
app = FastAPI()
path = "C:/House-Price-predictor/api-test" 

@app.post('/predict')
def predict(name : str):

     
    # Return the Result
    return {"Hello":"{name}"}

@app.get('/predict-log-error-csv')
def predict_log_error_csv():
    csv_file_path = os.path.join(path,'linear_model.csv')
    if os.path.exists(csv_file_path):
        return FileResponse('linear_model.csv')
    return {"error" : "File not found!"}

@app.get('/predict-log-error-JSON-500')
def predict_log_error_JSON_100():
    jsonArray = []
    csv_file_path = os.path.join(path,'linear_model.csv')

    if os.path.exists(csv_file_path):
        with open(csv_file_path, encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row,element in enumerate(csvReader):
                if(row<500):
                    jsonArray.append(element)

        return jsonArray

@app.get('/predict-log-error-JSON-all')
def predict_log_error_JSON():
    jsonArray = []
    csv_file_path = os.path.join(path,'linear_model.csv')

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



