import React from "react";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-2 overlay-image" style={{ backgroundImage: `url(/assets/images/work.svg)` }}>
            <span class="el-circle-side right"></span>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        move: {
                            direction: "top",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4,
                            },
                        },
                    },
                }}
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <h1>
                            Sara Cave
                            <br />
                            Developer
                        </h1>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
