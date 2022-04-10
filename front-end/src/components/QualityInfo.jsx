import React, { Component, text } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// The QualityInfo component takes in the props
// title, desc, image and optional desc2 image2
// which will divide the component into 2 columns if present.
class Quality extends Component {
  render() {
    return (
      <Container className="text-center">
        <h2 style={{ marginBottom: "25px" }}>{this.props.title}</h2>
        <Row>
          <Col style={{margin: "0px 15px"}}>
          {this.props.desc ? <p>{this.props.desc}</p> : null}
          {this.props.image ? <img style={{ width: "100%", marginBottom: "15px" }} src={this.props.image} /> : null }
          </Col>
          {this.props.image2 || this.props.desc2 ?
            <Col style={{margin: "0px 15px"}}>
              {this.props.desc2 ? <p>{this.props.desc2}</p> : null }
              {this.props.image2 ? <img style={{ width: "100%", marginBottom: "15px"  }} src={this.props.image2} /> : null}
            </Col> : null}
        </Row>
      </Container>
    );
  }
}

export default Quality;  