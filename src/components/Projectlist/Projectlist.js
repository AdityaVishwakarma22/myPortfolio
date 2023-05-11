import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import foodApp from '../../Assets/ecommerce.jpg'
import orbit from '../../Assets/orbit.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={foodApp}
                isBlog={false}
                title="Food Order App"
                description="Food Order web app built with React js. and Firebase as a backend. React hooks, Rest Api and react context have been implemented in this project."
                ghLink="https://adityavishwakarma22.github.io/Food-app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>
           
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={orbit}
                isBlog={false}
                title="Orbit Jobs"
                description="It is a responsive web design made with React.js and CSS3. It implements the concept of UI components and reusability."
                ghLink="https://adityavishwakarma22.github.io/Knovator/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist