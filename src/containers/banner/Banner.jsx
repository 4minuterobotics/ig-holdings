import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { medicalShield } from '../../assets';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import './banner.css';

const Banner = () => {
	return (
		<Router>
			<section
				className='banner'
				id='home'
			>
				<Container>
					<Row className='align-items-center'>
						<Col
							xs={12}
							md={6}
							xl={7}
						>
							<TrackVisibility partialVisibility>
								{({ isVisible }) => (
									<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
										<span className='tagline'>Integrated Health Speialists</span>
										<h1>IG Holdings</h1>
										<p>
											We are an integrated health specialists company, providing comprehensive and holistic solutions to all aspects of healthcare.
											Our team of experts is dedicated to helping you achieve your best health through innovative treatments and therapies. We strive
											for excellence in everything we do, from patient care to research and development, ensuring that our clients receive only the
											highest quality service. With years of experience in the field, we are well-equipped to handle any health-related issue, no
											matter how big or small. Our goal is to ensure that all our clients experience optimum health and wellness.
										</p>
										<HashLink
											to='#connect'
											className='connectlink'
										>
											<button onClick={() => console.log('connect')}>
												Let’s Connect <ArrowRightCircle size={25} />
											</button>
										</HashLink>
									</div>
								)}
							</TrackVisibility>
						</Col>
						<Col
							xs={12}
							md={6}
							xl={5}
						>
							<TrackVisibility partialVisibility>
								{({ isVisible }) => (
									<div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
										<img
											src={medicalShield}
											alt='Header Img'
										/>
									</div>
								)}
							</TrackVisibility>
						</Col>
					</Row>
				</Container>
			</section>
		</Router>
	);
};

export default Banner;
