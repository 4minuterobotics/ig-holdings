import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { colorSharp, counseling, heart, monitor, house, clinic } from '../../assets';
import './services.css';

import React from 'react';

const Services = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section
			className='skill'
			id='services'
		>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>Services</h2>
							<p>We offer a range of integrated health services.</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className='owl-carousel owl-theme skill-slider'
							>
								<div className='item padding'>
									<img
										src={counseling}
										alt='Behavioral Health Integration'
									/>
									<h5>Behavioral Health Integration</h5>
								</div>

								<div className='item'>
									<img
										src={house}
										alt='Patient-Centered Medical Homes (PCMH)'
									/>
									<h5>Patient-Centered Medical Homes (PCMH)</h5>
								</div>

								<div className='item'>
									<img
										src={monitor}
										alt='Telehealth and Remote Monitoring'
									/>
									<h5>Telehealth and Remote Monitoring</h5>
								</div>

								<div className='item'>
									<img
										src={clinic}
										alt='Community Health Centers'
									/>
									<h5>Community Health Centers</h5>
								</div>

								<div className='item'>
									<img
										src={heart}
										alt='Chronic Care Management Programs'
									/>
									<h5>Chronic Care Management Programs</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img
				className='background-image-left'
				src={colorSharp}
				alt='background'
			/>
		</section>
	);
};

export default Services;
