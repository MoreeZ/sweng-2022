# Software Engineering Group Project 2022
## Regression based model webapp.
The goal of our project is to create a deep machine learning regression model for a particular dataset, in our case we chose the Zillow housing price prediction dataset. Our project must visualise the results of the model’s house price prediction on a dashboard and must allow for user input.

A key feature that our client wanted us to have in our project, was two separate graphs. One being the visualisation of the house price prediction, this is aimed at non-technical users, and the other being a model quality page for technical users. The model’s quality page determines the level of accuracy of our regression model. Ultimately, we would anticipate that our project will allow users to get high quality and accurate house price predictions.

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
4. Run the server: `uvicorn main:app --reload`

## Frontend run instructions:
#### You can skip the following steps by accessing the hosted server at https://predict-houseprice.web.app/
1. Navigate to local repository: `cd front-end/` 
2. Install all npm packages `npm install`
3. Start the application: `npm start`
