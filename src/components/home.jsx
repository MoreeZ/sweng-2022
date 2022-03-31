import "../styles/home.css";
import React, { Component } from "react";
class Home extends Component {

  render() {
    return (
      <>
        <div className="home-container">
        <div className="dark-overlay"></div>
          <div className="home-center-content">
            <h1>Housing price prediction model</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget porttitor felis. In a magna felis. Vestibulum viverra placerat nisi, sit amet hendrerit ante volutpat eu. Aliquam gravida consequat augue nec posuere. Vestibulum eleifend varius ante, ut dictum nibh ultrices quis. Nullam nisi nisl, pharetra ut ex et, volutpat imperdiet diam. Aenean nec sapien nibh. Donec in mauris sapien.</p>
            <button className="form-control rounded-pill bg-primary">Get Started</button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
