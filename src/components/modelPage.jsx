import React, { Component } from "react";
import FirstModel from "./firstModel";
import SecondModel from "./secondModel";

class ModelPage extends Component {

  render() {
    return (
      <div style={{minHeight: "85vh"}}>
        <FirstModel />
        <SecondModel />
      </div>
    );
  }
}

export default ModelPage;
