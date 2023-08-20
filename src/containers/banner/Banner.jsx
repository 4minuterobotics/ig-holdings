import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { medicalShield } from '../../assets';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { websiteText } from '../../data';
import './banner.css';

const Banner = () => {
	return (
		<section
			className='banner'
			id='home'
		>
			<Container>
				<Row className='banner-align-items-center'>
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
					<Col
						xs={12}
						md={6}
						xl={7}
					>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									{/* <span className='tagline'>Integrated Health Speialists</span>
									<h1>IG Holdings</h1> */}
									<p>{websiteText.banner}</p>
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
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
