import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard, ExperienceCard } from '../../components';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { website1, website2, website3, website4, colorSharp2, medicalShield } from '../../assets';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './projects.css';

import React from 'react';

const Projects = () => {
	const projects = [
		{
			title: 'IG Counseling',
			description:
				'By combining physical and mental health services, our providers can better address the mental and emotional well-being of patients and identify potential health issues early on.',
			imgUrl: website1,
			tags: [
				{
					name: 'counseling',
					color: 'blue-text-gradient',
				},
				{
					name: 'substance abuse services',
					color: 'green-text-gradient',
				},
				{
					name: 'confidential',
					color: 'orange-text-gradient',
				},
			],
			website_link: 'https://facebook.com',
		},
		{
			title: 'IG Chronic Care',
			description:
				'These programs are designed to support patients with chronic conditions, such as diabetes, heart disease, or asthma, by coordinating their care across various healthcare providers and specialties.',
			imgUrl: website2,
			tags: [
				{
					name: 'prevention plans',
					color: 'blue-text-gradient',
				},
				{
					name: 'LPN ran',
					color: 'green-text-gradient',
				},
				{
					name: 'helping mfs',
					color: 'orange-text-gradient',
				},
			],
			website_link: 'https://instagram.com',
		},
		{
			title: 'IG Remote Monitoring',
			description:
				'Utilizing telehealth and remote monitoring technologies allows healthcare providers to offer virtual care and follow-up for patients, enhancing access to services and improving care continuity.',
			imgUrl: website3,
			tags: [
				{
					name: '24/7',
					color: 'blue-text-gradient',
				},
				{
					name: 'survailance avilable',
					color: 'green-text-gradient',
				},
				{
					name: 'on call assistance',
					color: 'orange-text-gradient',
				},
			],
			website_link: 'https://google.com',
		},
		{
			title: 'IG Health Centers',
			description: 'Community health centers play a crucial role in providing integrated health services to underserved populations.',
			imgUrl: website4,
			tags: [
				{
					name: 'medical',
					color: 'blue-text-gradient',
				},
				{
					name: 'dental',
					color: 'green-text-gradient',
				},
				{
					name: 'behaviorial',
					color: 'orange-text-gradient',
				},
			],
			website_link: 'https://myspace.com',
		},
	];

	const experiences = [
		{
			title: 'What We Help With',
			company_name: 'What we help with',
			icon: medicalShield,
			iconBg: '#383E56',
			date: 'March 2023 - Present',
			points: [
				'We provide psychiatric therapy to individuals struggling with various mental health challenges. Our mental health centers offer treatment for mental illnesses and are equipped with state-of-the-art facilities. Our dedicated team of mental health professionals is committed to assisting individuals from diverse backgrounds, ages, and ethnicities on their path to recovery. We understand the difficulties associated with seeking help, and we have successfully supported thousands of individuals in overcoming their mental health issues and leading fulfilling lives. Contact us today to learn more about how we can help you.',
			],
		},
		{
			title: 'How We Help',
			company_name: 'How we help',
			icon: medicalShield,
			iconBg: '#E6DEDD',
			date: 'June 2021 - Present',
			points: [
				"Our mental therapy programs are designed to provide comprehensive assistance to individuals seeking recovery. We understand that taking the first step towards recovery can be challenging, which is why we offer personalized treatment plans tailored to each individual's needs. Our mental facilities cater to a diverse range of requirements, whether you prefer inpatient therapy or outpatient services. We prioritize your well-being and will help you choose the most suitable mental health center based on your specific circumstances. Whether you require a facility covered by your insurance plan or desire a more luxurious and serene environment, we are here to guide you. Contact us to explore how we can assist you on your journey to mental wellness.",
			],
		},
		{
			title: 'Where We Help',
			company_name: 'Where we help',
			icon: medicalShield,
			iconBg: '#383E56',
			date: 'Aug 2014 - May 2021',
			points: [
				'Our mental health centers are strategically located across the country, serving major cities and states. We ensure easy access to treatment by having affiliated centers near you. However, we recognize that some individuals may prefer seeking help away from their usual surroundings, which can be beneficial in certain cases. Our goal is to make it convenient for you to find a mental health center regardless of your location. Our facilities are designed to provide a clean and modern environment staffed with compassionate professionals. We acknowledge the challenges of seeking help and have supported numerous individuals in their journey to recovery. Reach out to us to discover how we can support you in achieving optimal mental well-being.',
			],
		},
	];

	return (
		<section
			className='project'
			id='projects'
		>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									{/* <h2>Links / About Us</h2> */}
									<p>Click either tab.</p>
									<Tab.Container
										id='projects-tabs'
										defaultActiveKey='first'
									>
										<Nav
											variant='pills'
											className='nav-pills mb-5 justify-content-center align-items-center'
											id='pills-tab'
										>
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
										<Tab.Content
											id='slideInUp'
											className={isVisible ? 'animate__animated animate__slideInUp' : ''}
										>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return (
															<ProjectCard
																key={index}
																{...project}
															/>
														);
													})}
												</Row>
											</Tab.Pane>
											{/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
											<Tab.Pane eventKey='third'>
												<p>10 years in behaviorial management practices.</p>
												<div
													className='component'
													id='experience'
												>
													<div className='mt-20 flex flex-col'>
														<VerticalTimeline>
															{experiences.map((experience, index) => (
																<ExperienceCard
																	key={`experience-${index}`}
																	experience={experience}
																/>
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
			<img
				className='background-image-right'
				src={colorSharp2}
				alt='background'
			></img>
		</section>
	);
};

export default Projects;
