from fastapi import FastAPI
import os
import uvicorn
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




