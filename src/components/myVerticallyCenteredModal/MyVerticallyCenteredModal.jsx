import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './myVerticallyCenteredModal.css';

const MyVerticallyCenteredModal = (props) => {
	return (
		<Modal
			{...props}
			size='sm'
			className='my-modal'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header className='modal-header'>
				<Modal.Title id='contained-modal-title-vcenter'>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.description}</p>

				<div className='tech-used'>
					{props.tags.map((tag) => (
						<span
							key={`${props.title}-${tag.name}`}
							className={` ${tag.color}`}
						>
							#{tag.name}
						</span>
					))}
				</div>

				<div className='github-div'>
					<div
						className='website-link'
						onClick={() => window.open(props.website_link, '_blank')}
					>
						<p>Visit Website</p>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='light'
					onClick={props.onHide}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MyVerticallyCenteredModal;
