# Software Engineering Group Project 2022
## Regression/Classification/Deep learning based models.

We take any regression or classification use case and do our predictions. This is easier said than done. We need to follow all the assumptions of the algorithm that we use. We need to use various algorithms, stacking models. tons of parameter tunings and model use various model evaluation tests. I personally would go for regression model. Note: In all the models, based on the use case chosen a dashboard needs to be created.

## Group members:
- Oskar Mroz
- Aislinn Smyth 
- Mingwei Shi
- Ódhran Mulvihill
- Eligijus Skersonas 
- Tianze Zhang
- Shohinabonu Shamshodova 

## Download files
- Clone the repository using: `git clone https://github.com/MoreeZ/sweng-2022/`

## Backend api run instructions: 
1. Navigate to restful-api directory `cd restful-api/`
2. Make sure both python3 and pip are installed on your machine. On linux: `sudo apt install python3 pip`
3. install third party dependencies for the api (sudo) `pip install fastapi uvicorn pandas`
4. Run the server: uvicorn main:app --reload

## Frontend run instructions:
#### You can skip the following steps by accessing the hosted server at https://predict-houseprice.web.app/
1. Navigate to local repository: `cd front-end/` 
2. Install all npm packages `npm install`
3. Start the application: `npm start`
