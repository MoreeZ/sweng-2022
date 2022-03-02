/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Header extends Component {
  centreContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  render() {
    return this.renderHeader();
  }

  renderHeader() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            House Price Predictor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Model Quality
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
