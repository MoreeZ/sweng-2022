/*
@author: Eligijus Skersonas, Oskar Mroz
*/

import axios from "axios";
import React, { Component } from "react";
import QualityPage from './qualityPage1';
import Features from './features1.jsx'

class FirstModel extends Component {
  state = {
    yearBuilt: "2005",
    taxAmount: "6941.39",
    noOfBathrooms: "2",
    noOfBedrooms: "4",
    area: "3633",
    house_price: "223100",
    errors: {
      yearBuilt: [],
      taxAmount: [],
      noOfBathrooms: [],
      noOfBedrooms: [],
      area: [],
      house_price: []
    },
    errorQuantity: 0,
    predictData: {}

  };

  handlePredict = (data) => {
    console.log("Pressed handlePredict");
    const postData = {
      bathroomcnt: parseInt(data.noOfBathrooms),
      bedroomcnt: parseInt(data.noOfBedrooms),
      finishedsquarefeet12: parseFloat(data.area),
      taxamount: parseFloat(data.taxAmount),
      yearbuilt: parseInt(data.yearBuilt),
      house_price: parseFloat(data.house_price)
    }

    // This is where the api call goes via axios.
    axios.post("http://127.0.0.1:8000/predict", postData).then(res=>{
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
        <h1 style={{marginTop: 40}}>Ridge Regression Model</h1>
        <Features modelState={this.state} handlePredict={this.handlePredict}/>
        <div style={{width: 350, padding: 20, backgroundColor: "#212529", borderRadius: 20, color: "white"}}>
          <div>Predicted house price: {this.state.predictData["Pridicted house price"] ? "$" + Math.round(this.state.predictData["Pridicted house price"], 2) : null }</div>  
        </div>
        <QualityPage/>
      </div>
    )
  }
}

export default FirstModel;
