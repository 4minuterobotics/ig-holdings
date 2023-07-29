import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logoNoBg, navIcon1 } from '../../assets';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
		console.log('going to page section ', value);
	};
	return (
		<Router>
			<Navbar
				expand='lg'
				className={scrolled ? 'scrolled' : ''}
			>
				<Container>
					<Navbar.Brand href='/'>
						<img
							src={logoNoBg}
							alt='Logo'
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href='#services'
								className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('services')}
							>
								Services
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('projects')}
							>
								Links
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('projects')}
							>
								About Us
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<div className='social-icon'>
								<a href='https://www.linkedin.com/company/medic-ig-holdings-sdn-bhd/'>
									<img
										src={navIcon1}
										alt=''
									/>
								</a>
								{/* <a href="#"><img src={navIcon2} alt="" /></a>
        <a href="#"><img src={navIcon3} alt="" /></a> */}
							</div>
							<HashLink to='#connect'>
								<button
									className='vvd'
									onClick={() => onUpdateActiveLink('connect')}
								>
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};

export default NavBar;
