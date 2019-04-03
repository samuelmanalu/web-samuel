import React, { Component } from 'react';
import './landing-page.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../component/card/card';
import SkillChart from '../../component/chart/chart';

class LandingPage extends Component{

    render(props){
        const dataWeb =[
            {skill: "HTML", A:145, fullMark: 150},
            {skill: "PHP", A:115, fullMark: 150},
            {skill: "CSS", A:140, fullMark: 150},
            {skill: "SASS", A:140, fullMark: 150},
            {skill: "JavaScript", A:140, fullMark: 150},
            {skill: "Django", A:120, fullMark: 150},
        ]

        const dataDesktop =[
            {skill: "Java", A:130, fullMark: 150},
            {skill: "Python", A:130, fullMark: 150},
            {skill: "PSQL", A:140, fullMark: 150},
            {skill: "Firebase", A:120, fullMark: 150},
            {skill: "C", A:80, fullMark: 150},
        ]
        
        const dataOther =[
            {skill: "Photoshop", A:125, fullMark: 150},
            {skill: "Illustrator", A:120, fullMark: 150},
            {skill: "After Effect", A:80, fullMark: 150},
            {skill: "Figma", A:140, fullMark: 150},
            {skill: "Premiere Pro", A:100, fullMark: 150},
        ]

        return(
            <div>
                <Container fluid="true" className="background-image outer-center">
                    <div className="container-text middle-center">
                        <div className="inner-center text-style">
                            <h1>HI, I AM <span className="color-font">SAMUEL</span>!</h1>
                            <h3>A <span className="color-font">Web Developer</span>, <span className="color-font">Student</span>, and <span className="color-font">Business Enthusiast</span></h3>
                        </div>
                    </div>
                </Container>

                <Container fluid="true" className="yellow-background">
                    <Row>
                        <Col md={6}>
                            <div className="container-info">
                                <p>Hi, i am Samuel. I am a programmer and student at University of Indonesia. Currently, I am actively contribute to an organization called PO FASILKOM UI as a General Treasurer and Secretary. <br/> <br/>PO FASILKOM UI is a Christian organization that is under the auspices of PO UI. PO FASILKOM UI is also one of the autonomous institutions in Faculty of Computer Science, University of Indonesia.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="photo">
                            </div>
                            {/* <img alt="Samuel" src={require('../../assets/img/Samuel.jpg')} /> */}
                        </Col>
                    </Row>
                </Container>

                <Container fluid="true" className="background-image work-background outer-center">
                    <div className="container-text middle-center darker">
                        <div className="inner-center text-style">
                            <h3>I love <span className="color-font">building</span> things with great people, and <span className="color-font">hearing</span> about new ideas.</h3>
                            <h1>LET'S BUILD SOMETHING <span className="color-font">AMAZING</span> TOGETHER!</h1>
                            <div className="button-section">
                                <button>Contact Me!</button>
                                <button>My Portofolio</button>
                            </div>
                        </div>
                        
                    </div>
                </Container>

                <Container fluid="true" className="white-background partial-height">
                    <div className="inner-center text-style">
                        <h2 className="font-black">My Latest Project</h2>
                    </div>
                    <div className="card-section">
                        <Card 
                            title="SAMUELMANALU.COM" 
                            description="Project pribadi yang ditujukan untuk portofolio dan bloging kedepannya. Dibuat dengan menggunakan React.Js, SASS, dan Firebase"
                            image={require('../../assets/img/samuelmanalu.png')}
                        />
                        <Card 
                            title="POKOK DOA NUSANTARA" 
                            description="Project yang diinisiasi oleh Perkantas. Dibuat dengan menggunakan React.Js, SASS, dan Firebase"
                            image={require('../../assets/img/Login.png')}
                        />
                        <Card 
                            title="BUKABUKU.COM" 
                            description="Project pribadi yang ditujukan untuk portofolio dan bloging kedepannya. Dibuat dengan menggunakan React.Js, SASS, dan Firebase"
                            image={require('../../assets/img/Bukabuku.png')}
                        />
                    </div>
                </Container>
                <Container fluid="true" className="background-image idea-background outer-center">
                    <div className="container-text middle-center darker">
                        <div className="inner-center text-style">
                            <h3>Love to <span className="color-font">learn something new</span> and <span className="color-font">create an innovative</span> product that can <span className="color-font">help others.</span></h3>
                            <h1>SO, WHEN DO WE <span className="color-font">DISCUSS</span> YOUR <span className="color-font">BIG IDEA?</span></h1>
                            <div className="button-section">
                                <button>Contact Me!</button>
                                <button>My Skills</button>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container fluid="true" className="yellow-background full-height">
                    <div className="inner-center text-style">
                        <h2 className="font-black">My Skills</h2>
                    </div>
                    <div className="chart-section">
                        <div className="chart-info">
                            <SkillChart data={dataDesktop} />
                            <div className="inner-center text-style padding-up">
                                <h3 className="font-black">Desktop Programming and Data Processing</h3>
                            </div>
                        </div>
                        <div className="chart-info">
                            <SkillChart data={dataWeb} />
                            <div className="inner-center text-style padding-up">
                                <h3 className="font-black">Web Development</h3>
                            </div>
                        </div>    
                        <div className="chart-info">
                            <SkillChart data={dataOther} />
                            <div className="inner-center text-style padding-up">
                                <h3 className="font-black">Other Skills</h3>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid="true" className="background-image connected-background outer-center">
                    <div className="container-text middle-center darker">
                        <div className="inner-center text-style">
                            <h3>I'm here to create <span className="color-font">meaningful</span> and <span className="color-font">lasting</span> relationships with new people.</h3>
                            <h1>LET'S GET <span className="color-font">CONNECTED!</span></h1>
                            <div className="social-section">

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

}

export default LandingPage;