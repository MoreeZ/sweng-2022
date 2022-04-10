import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import QualityInfo from '../reusable/QualityInfo.jsx';

import modelStacking from '../../images/model_stacking_2.png';
import logerror2 from '../../images/logerror2.png';
import FeatureImportance from '../../images/feature_importance_2.png'

// The following component contains the contents  of the quality page.
// The component is divided into 3 rows. First two rows have 2 columns.
// Last row has one column. The columns contain the QualityInfo component
// which takes in the props title, desc, image and optional desc2 image2
// which will divide the component into 2 columns. (implemented in last row)
class Quality extends Component {
    render() {
        return (
            <Container className="text-center" fluid>
                <h1 style={{ marginTop: 30 }}>Quality information</h1>
                {/* Row 1 */}
                <Row style={{ marginTop: "50px" }}>
                    <Col >
                        <Row>
                            <QualityInfo title={"Basic Overview"} desc={
                                <>
                                    <p>This is an alternative model user can choose which uses a combination of XGBoost and
                                        lightGBM. Both algorithms build upon: supervised machine learning, decision trees,
                                        ensemble learning, and gradient boosting.</p>
                                    <p>These two algorithms provide a Faster training
                                        speed, higher efficiency and lower memory usage compared to the rigid-regression
                                        algorithm.</p>
                                    <p>Another purpose creating this model is to provide a different prediction with a
                                        different algorithm, so that the users are not limited to only one prediction, which
                                        sometimes can be less accurate than the other model in different situations. I believe having
                                        the second model will provide the users an opportunity to compare and choose the
                                        reasonable prediction generated.</p>
                                </>
                            } image={null} />
                        </Row>
                        <Row>
                            <QualityInfo title={"Log-error"} desc={"One of the evaluation metrics used is log-error. Log-error is calculated by the difference between the log of the actual sale price and the log of the predicted sale price. Therefore, it can helps measure the overall accuracy of the model’s prediction. A log-error evaluation was performed on the test dataset, and a graph with predicted log-error and actual log-error was created. We can see at the graph bellow, most of our prediction are centered through all of the actual log-errors and the predicted variance increases as the actual increases."} image={logerror2} />
                        </Row>
                    </Col>
                    <Col>
                        <QualityInfo title={"Feature importance"} desc={
                            <>
                                <p>The feature of importance is obtained by XGBoost as well. The algorithm creates a multi-
                                    way tree — each node can have two or more edges — finding the categorical feature that
                                    will maximize the information gain using the impurity criterion entropy. After obtaining the
                                    feature of importance, 7 features are selected:</p>
                                <ul className="text-start">
                                    <li>Bathroomcnt: Number of bathrooms in home including fractional bathrooms</li>
                                    <li>Bedroomcnt: Number of bedrooms in home</li>
                                    <li>Calculatedfinishedsquarefeet: Calculated total finished living area of the home</li>
                                    <li>finishedsquarefeet12: Finished living area</li>
                                    <li>yearbuilt: The Year the principal residence was built</li>
                                    <li>structuretaxvaluedollarcnt: The assessed value of the built structure on the parcel</li>
                                    <li>taxamount: The total property tax assessed for that assessment year</li>
                                </ul>
                            </>
                        } image={FeatureImportance} />
                    </Col>
                </Row>
                {/* Row 2 */}
                <Row className="justify-content-space-evenly" style={{ marginTop: "50px" }}>
                    <Col>
                        <QualityInfo title={"Mean absolute error (MAE)"} desc={
                            <>
                                <p>Another measuring metric used to test the accuracy is MAE. MAE refers to the magnitude of
                                    difference between the prediction of an observation and the true value of that observation.
                                    MAE takes the average of absolute errors for a group of predictions and observations as a
                                    measurement of the magnitude of errors for the entire group. MAE can also be referred as
                                    L1 loss function. Therefore, the lower the value means smaller distance between predicted
                                    and actual, which are more accurate.</p>
                                <p>The MAE obtained for the model trained by XGBoost is 0.07000506510733166. The AME for
                                    model trained by lightGDM is 0.06984312466163152. Both are considered low. With the
                                    stacking of both of them, the MAE improves to 0.06983147271924423.</p>
                            </>
                        } />
                    </Col>
                    <Col>
                        <QualityInfo title={"Model stacking"} desc={
                            <>
                                <p>Model Stacking is a way to improve model predictions by combining the outputs of multiple
                                    models and running them through another machine learning model called a meta-learner.
                                    Although XGBoost and LightGDM are similar algorithms, there are trade-offs such as
                                    performance and training time between them.</p>
                                <p>By the use of stacking, all the advantages of
                                    the two models can be obtained and therefore to produce the most accurate result. Our
                                    model uses linear regression as the meta-learner, the parameter of the meta-learner is
                                    obtained from the prediction of XGBoost and LightGDM.</p>
                            </>
                        } image={modelStacking} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Quality;
