/*
@author: Eligijus Skersonas
*/

import axios from "axios";
import React, { Component } from "react";
import Features from './features2.jsx';
import QualityPage2 from './qualityPage2';

class SecondModel extends Component {
  state = {
    yearBuilt: "1969",
    taxAmount: "4542.86",
    noOfBathrooms: "2",
    noOfBedrooms: "3",
    area: "1476",
    house_price: "10000",
    structuretaxvaluedollarcnt: "313",
    calculatedfinishedsquarefeet: "12",
    errors: {
      yearBuilt: [],
      taxAmount: [],
      noOfBathrooms: [],
      noOfBedrooms: [],
      area: [],
      house_price: [],
      structuretaxvaluedollarcnt: [],
      calculatedfinishedsquarefeet: [],
    },
    errorQuantity: 0,
    predictData: {}
  };

  handlePredict = (data) => {
    // this is there the api data is fetched via axios
    const postData = {
      bathroomcnt: data.noOfBathrooms,
      bedroomcnt: data.noOfBedrooms,
      finishedsquarefeet12: data.area,
      taxamount: data.taxAmount,
      yearbuilt: data.yearBuilt,
      house_price: data.house_price,
      structuretaxvaluedollarcnt: data.structuretaxvaluedollarcnt,
      calculatedfinishedsquarefeet: data.calculatedfinishedsquarefeet
    }

    // This is where the api call goes via axios.
    axios.post("http://127.0.0.1:8000/predict-stacking", postData).then(res=>{
      console.log("Post Request success");
      this.setState({predictData: res.data});
    }).catch(err=>{
      console.log("Post Request error");
      console.log(err);
    });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", "alignItems": "center", minHeight: "80vh"}}>
        <h1 style={{marginTop: 40}}>XBoost Model</h1>
        <Features modelState={this.state} handlePredict={this.handlePredict} />
        <div style={{ width: 350, padding: 20, backgroundColor: "#212529", borderRadius: 20, color: "white" }}>
          <div>Predicted house price: {this.state.predictData["Pridicted house price"] ? "$" + Math.round(this.state.predictData["Pridicted house price"], 2) : null}</div>
        </div>
        <QualityPage2/>
      </div>
    )
  }
}

export default SecondModel;
