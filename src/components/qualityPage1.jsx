import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import QualityInfo from './QualityInfo.jsx';

import featureSelection from '../images/FeatureSelectionResults.png';
import logerrorFitted from '../images/Fitted_graph.png';
import meanSqErr from '../images/mean_square_error.png';
import L1Explanation from '../images/L1Explanation.jpg';
import QQplot from '../images/QQPlot.png';

// The following component contains the contents  of the quality page.
// The component is divided into 3 rows. First two rows have 2 columns.
// Last row has one column. The columns contain the QualityInfo component
// which takes in the props title, desc, image and optional desc2 image2
// which will divide the component into 2 columns. (implemented in last row)
class Quality extends Component {
  render() {
    return (
      <Container className="text-center" fluid>
        <h1 style={{marginTop: 30}}>Quality information</h1>
        <Row style={{ marginTop: "50px" }}>
          <Col >
            <QualityInfo title={"Basic Overview"} desc={
              <>
                <p>The target audience of the quality page is technical users who have an abundance of statistics knowledge, these pages give an in-depth overview of each picture to those users. This page has four graphs: feature selection graph, mean square error comparison, log error( target variable) fitted graph, and a Q-Q plot.</p>
                <p>The biggest asset of our product is that we have relative competitive metrics in mean square error, using various forms of machine learning for the best result. The general overview of our machine learning pipeline is as follows: </p>
                <p>Data exploration &gt;Removal features with a high missing rate(over 95% missing rate) -&gt; Imputation of the rest features via K nearest neighbour imputation -&gt; Feature selection via random forest -&gt; Regression analysis -&gt; Multicollinearity analysis via variance inflation factor -&gt; Ridge regression -&gt; Evolution of selected model -&gt; Visualization .</p>
              </>
            } image={null} />
          </Col>
          <Col>
            <QualityInfo title={"QQ Plot"} desc={`From our graph, it is obvious to discover that the shape of data is in S shape which follows the property of over-dispersed data. Over-dispersed data has an increased number of outlier since in real life. Most house buyers have conformity when they are not paired with real-estate market.`} image={QQplot} />
          </Col>
        </Row>
        <Row className="justify-content-space-evenly" style={{ marginTop: "50px" }}>
          <Col>
            <QualityInfo title={"Log-error"} desc={"This graph is the fit graph on the test dataset for log error, and from this graph, we could discover that most of the original data falls in the center collectively and both sides of the upper and lower bounds separately. Since from the previous Q-Q plot, we know the original data is over-dispersed data, the fit line is not the standard straight line as well."} image={logerrorFitted} />
          </Col>
          <Col>
            <QualityInfo title={"Mean-square error"} desc={
              <>
                <p>The most competitive point of our product is our use of mean squared error, for those unaware this is what mean squared error is.
                  <p>A regression line's mean squared error (MSE) indicates how near it is to a collection of points. It accomplishes this by squaring the distances between the points and the regression line (the "errors"), squaring is required to remove any negative signals. More significant discrepancies are likewise given greater weight. Because machine learning models calculate the average of a series of mistakes, it has termed the mean squared error; the lower the MSE, the more accurate the forecast.</p>
                  <p>We utilize ridge regression to construct our model to eliminate multicollinearity to a degree. The following graph is our result of mean squared error.</p>
                  <p>The most important point is that we compared with most of the online published results in this field, finding that most results fall in the range from 0.01 to 0.06. Via this comparison, our product has relatively more accurate predictions.</p></p>
              </>
            } image={meanSqErr} />
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <QualityInfo title={"Feature Selection"} image={L1Explanation} desc={
              <>
                <p>The performance of Lasso for feature selection wasn't good, as the relationship between the features and the target variable is not linear. In our dataset, several features have the property of multicollinearity with each other. The following picture is a brief analysis from the perspective of convex optimization.</p>
                <p>In our dataset, several features have the allign with each other colinnearly, and if we choose lasso as a method of feature selection, it would reduce this to a negligible amount since the optimization of the lasso is based on absolute value on ordinary least squares.</p>
                <p>The circle is the contour line of the L1 regularization search space after constraint; the Rhombus is the search space. This is the general explanation. It is straightforward to have an intersection between two shapes.</p>
              </>
            } image2={featureSelection} desc2={
              <>
                <p>Based on the feature important graph and real-life meaning consideration, we chose these five features as our final features to predict the house price and log error.</p>
                <ul className="text-start">
                  <li>'taxamount'	:The total property tax assessed for that assessment year</li>
                  <li>'finishedsquarefeet12' :	Finished living area</li>
                  <li>'bathroomcnt :Number of bathrooms in home including fractional bathrooms</li>
                  <li>'bedroomcnt' :	 Number of bedrooms in home</li>
                  <li>'yearbuilt'	: The Year the principal residence was built</li>
                </ul>
              </>
            }/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Quality;
