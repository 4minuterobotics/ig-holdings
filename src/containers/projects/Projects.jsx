import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard, ExperienceCard } from '../../components';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projects, experiences } from '../../data';

import { website1, website2, website3, website4, colorSharp2, medicalShield } from '../../assets';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './projects.css';

import React from 'react';

const Projects = () => {
	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									{/* <h2>Links / About Us</h2> */}
									<p>Click either tab.</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav variant='pills' className='nav-pills mb-5 justify-content-center project-align-items-center' id='pills-tab'>
											<Nav.Item>
												<Nav.Link eventKey='first'>
													<h3>Links</h3>
												</Nav.Link>
											</Nav.Item>
											{/* <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item> */}
											<Nav.Item>
												<Nav.Link eventKey='third'>
													<h3>About Us</h3>
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											{/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
											<Tab.Pane eventKey='third'>
												<p>10 years in behaviorial management practices.</p>
												<div className='component' id='experience'>
													<div className='mt-20 flex flex-col'>
														<VerticalTimeline>
															{experiences.map((experience, index) => (
																<ExperienceCard key={`experience-${index}`} experience={experience} />
															))}
														</VerticalTimeline>
													</div>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt='background'></img>
		</section>
	);
};

export default Projects;
