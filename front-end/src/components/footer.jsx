import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-dark mt-4 p-2">
        <div className="footer-copyright text-center text-light py-3">
          © Copyright IBM Corporation 1994, 2022.
        </div>
      </footer>
    );
  }
}

export default Footer;
