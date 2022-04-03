/*
@author: Eligijus Skersonas
*/

import axios from "axios";
import React, { Component } from "react";
import Features from './features1.jsx';
import QualityPage2 from './qualityPage2';

class SecondModel extends Component {
  state = {
    yearBuilt: "",
    taxAmount: "",
    noOfBathrooms: "",
    noOfBedrooms: "",
    area: "",
    errors: {
      yearBuilt: [],
      taxAmount: [],
      noOfBathrooms: [],
      noOfBedrooms: [],
      area: []
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
      house_price: 0,
      structuretaxvaluedollarcnt: 0,
      calculatedfinishedsquarefeet: 0
    }

    // This is where the api call goes via axios.
    axios.post("http://127.0.0.1:8000/predict-stacking", postData).then(res=>{
      this.setState({predictData: res});
    });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", "alignItems": "center", minHeight: "80vh"}}>
        <h1 style={{marginTop: 40}}>XBoost Model</h1>
        <Features modelState={this.state} handlePredict={this.handlePredict} />
        <div style={{ width: 350, padding: 20, backgroundColor: "#212529", borderRadius: 20, color: "white" }}>
          <div>Predicted house price: {this.state.predictData["Pridicted house price"] ? this.state.predictData["Prididicted house price"] : null}</div>
        </div>
        <QualityPage2/>
      </div>
    )
  }
}

export default SecondModel;
