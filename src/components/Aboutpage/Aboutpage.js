import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Front End developer. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
                <Row>
                    <h3 className='aboutmetext'>Experience : Jan 2022 - Nov 2022</h3>
                        <p className='aboutdetails'>
                            <b>Company :</b><span> Freshdigital (Chennai, Tamil Nadu)</span><br />
                            <b>Position :</b><span> Front end Developer</span><br />
                            <b>Tech Stack :</b><span> JavaScript, jQuery, React.js, Bootstrap, MUI, CSS3</span><br />
                            <b>Responsibility :</b>
                                <ul>
                                    <li>Collaborated with 4 other developers using Git</li>
                                    <li>Building responsive cross platform website</li>
                                    <li>Maintaining consistent theme and styles throughout the web page</li>
                                    <li>Integrating with Open Source technologies</li>
                                    <li>Working with REST APIs</li>
                                </ul>
                        </p>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage