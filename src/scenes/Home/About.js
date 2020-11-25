import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import { DiReact, DiJava, DiDrupal } from 'react-icons/di';
import { SiRails, SiApachesolr, SiDjango } from 'react-icons/si';

const About = () => {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/me.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Sara Cave.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>I am passionate Developer always excited for the challenges that come with development! Here are some things I specialise in. </p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                            <span className="el-icon-icon">
                                            <DiReact />
                                            </span>
                                            </div>
                                            <div className="content">
                                                <h3>React</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon">
                                                    <SiRails />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h3>Ruby on Rails</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon">
                                                    <DiJava />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h3>Java</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon">
                                                    <SiApachesolr />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h3>Apache Solr</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon">
                                                    <DiDrupal />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h3>Drupal</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon">
                                                    <SiDjango />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h3>Django</h3>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
