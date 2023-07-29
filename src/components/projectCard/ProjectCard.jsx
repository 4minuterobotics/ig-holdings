import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from '..';
import './projectCard.css';

const ProjectCard = ({ title, description, imgUrl, tags, source_code_link, website_link }) => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Col
				size={12}
				sm={12}
				md={6}
			>
				<div
					className='proj-imgbx'
					onClick={() => setModalShow(true)}
				>
					<img src={imgUrl} />

					<div className='proj-txtx'>
						<h4>{title}</h4>
					</div>
				</div>
			</Col>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={title}
				description={description}
				tags={tags}
				source_code_link={source_code_link}
				website_link={website_link}
			/>
		</>
	);
};

export default ProjectCard;
//vs code installed extensions
//prettier, arduino, auto rename tag, babel javascript, c/c++, ES7+ React/Redux/React-Native snippets, ESLint, vscode-icons
//Git Graph, indent-rainbow, javascript (ES6) code snippets, live Sass compiler, material icon theme, serial monitor

// dont need
//HTML CSS Support, jupyter, jupyter cell tags, juppyter keymap, jupyter notebook renderers, jupyter slide show,
//live server, pylance, python, rainbow tags
