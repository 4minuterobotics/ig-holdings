import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/navbar/NavBar';
import Banner from './containers/banner/Banner';
import Services from './containers/Services';
import Projects from './containers/Projects';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Helmet } from 'react-helmet';

const App = () => {
	return (
		<div className='App'>
			{/* <Helmet>
      <title>William's Portfolio</title>
      <meta charSet='utf-8'/>
      <meta name="description" content="We are Integrated Health Specialists, committed to providing 
					                              tailored solutions for improved health and wellbeing. With 
					                              our expertise in health care management and research, we strive 
					                              to create the best results for our clients. Contact us today to 
					                              learn more about how we can help you. " />
      <link rel="icon" type="image" href="./src/assets/img/logo.png" />
    </Helmet> */}

			<ToastContainer
				position='bottom-center'
				limit={1}
			/>
			<NavBar />
			<Banner />
			<Services />
			<Projects />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
