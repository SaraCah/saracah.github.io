import React from "react";
import { Container, Row, Col } from "react-grid-system";

const education = [
    {
        title: "Coder Academy",
        subtitle: "Diploma of Information Technology",
        description: " A bootcamp that focused on web development and user experience, primarily utilizing JavaScript, Ruby on Rails and HTML/CSS.",
        date: "(2020)",
        icon: "ti-crown",
    },
    {
        title: "Queensland Univeristy of Technology",
        subtitle: "Bachelor of Engineering",
        description: "GPA: 6.2",
        date: "(2014-2018)",
        icon: "ti-cup",
    },
];
const experience = [
    {
        title: "Support Engineer",
        subtitle: "Gaia Resources | Brisbane",
        description: "Deliver technical support for a wide range of applications written in React Js, RailsSinatra, Vue Js, Ruby on Rails",
        date: "(2020)",
        icon: "ti-heart",
    },
    {
        title: "Estimator",
        subtitle: "ADCO Constructions| Brisbane",
        description: "Preparing competitive tender bids which accurately reflect the requirements of the tender documents ",
        date: "(2016-2018)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
