import "../styles/home.css";
import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

import Pmingwei from "../images/Mingwei.png"
import Pshahina from "../images/Shahina.png"
import Peli from "../images/Eli.jpeg"
import Poskar from "../images/Oskar.jpeg"
import Paslinn from "../images/aslinn.png"
class Home extends Component {

  renderTeamMember = (name, role, image) => {
    return (
      <div className="team-member">
        <div className="img-wrapper">
          <img src={image} />
        </div>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="home-container center-cont">
          <div className="dark-overlay"></div>
          <div className="home-center-content">
            <h1>Housing price prediction model</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget porttitor felis. In a magna felis. Vestibulum viverra placerat nisi, sit amet hendrerit ante volutpat eu. Donec in mauris sapien.</p>
            <Link to="/model/"><button className="rounded-pill btn bg-primary">Get Started</button></Link>
          </div>
        </div>
        <div className="about-project center-cont">
          <div className="about-content">
            <h1>About the project</h1>
            <p>The goal of our project is to create a deep machine learning regression model for a particular dataset, in our case we chose the Zillow housing price prediction dataset. Our project must visualise the results of the model’s house price prediction on a dashboard and must allow for user input.</p>
            <p>A key feature that our client wanted us to have in our project, was two separate graphs. One being the visualisation of the house price prediction, this is aimed at non-technical users, and the other being a model quality page for technical users. The model’s quality page determines the level of accuracy of our regression model. Ultimately, we would anticipate that our project will allow users to get high quality and accurate house price predictions.</p>
            </div>
        </div>
        <div className="team-members center-cont">
          <div className="members-content">
            <h1>Our team</h1>
            <Row style={{marginBottom: 40}}>
              <Col>{this.renderTeamMember("Mingwei Shi", "Project Lead", Pmingwei)}</Col>
              <Col>{this.renderTeamMember("Tianze Zhang", "Backend Developer & Manager", null)}</Col>
              <Col>{this.renderTeamMember("Eligijus Skersonas", "Frontend Developer & Manager ", Peli)}</Col>
              <Col>{this.renderTeamMember("Aislinn Smyth", "Frontend Developer & Communication Lead", Paslinn)}</Col>
            </Row>
            <Row>
              <Col>{this.renderTeamMember("Ódhran Mulvihill", "Backend Developer", null)}</Col>
              <Col>{this.renderTeamMember("Shohinabonu Shamshodova", "Backend Developer", Pshahina)}</Col>
              <Col>{this.renderTeamMember("Oskar Mroz", "Frontend Developer", Poskar)}</Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
