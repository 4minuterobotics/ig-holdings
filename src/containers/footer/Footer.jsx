import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from '../../components/mailchimpForm/MailchimpForm';
import { navIcon1 } from '../../assets';
import './footer.css';
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					<MailchimpForm />
					{/* <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
              </Col> */}
					<Col
						size={12}
						sm={6}
						className='text-center text-sm-end'
					>
						<div className='social-icon footer-icons'>
							<a href='https://www.linkedin.com/company/medic-ig-holdings-sdn-bhd/'>
								<img
									src={navIcon1}
									alt='Icon'
								/>
							</a>
							{/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
                  <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
						</div>
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
