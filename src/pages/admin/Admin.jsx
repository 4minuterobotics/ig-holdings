// import React, { useState } from 'react';

// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { previewImg } from './assets';

// const Admin = () => {
// 	const [avatar, setAvatar] = useState(null);

// 	const handleFileInputChange = (e) => {
// 		const reader = new FileReader();
// 		reader.onload = () => {
// 			if (reader.readyState === 2) {
// 				setAvatar(reader.result);
// 				console.log('reader: ', reader.result);
// 				console.log('end of photo data');
// 			}
// 		};
// 		reader.readAsDataURL(e.target.files[0]);
// 	};

// 	return (
// 		// ---------------------------------------------------blog updater
// 		<Form>
// 			<Row className='mb-3'>
// 				{/* -------------------------------title */}
// 				<Form.Group
// 					as={Col}
// 					controlId='title'
// 				>
// 					<Form.Label>Title</Form.Label>
// 					<Form.Control
// 						type='text'
// 						name='title'
// 					/>
// 				</Form.Group>

// 				{/* ---------------------------date */}
// 				<Form.Group
// 					as={Col}
// 					controlId='date'
// 				>
// 					<Form.Label>Date</Form.Label>
// 					<Form.Control
// 						placeholder='--/--/----'
// 						type='date'
// 						name='date'
// 					/>
// 				</Form.Group>
// 			</Row>
// 			{/* --------------------------------image */}
// 			<div>
// 				<label
// 					htmlFor='avatar'
// 					className='block text-sm font-medium text-gray-700'
// 				></label>
// 				<div className='mt-2 flex items-center blog-img-uploader'>
// 					<span className='inline-block h-8 w-8  overflow-hidden new-img-span'>
// 						{avatar ? (
// 							<img
// 								src={avatar}
// 								alt='avatar'
// 								className='h-full w-full object-cover new-blog-img'
// 							/>
// 						) : (
// 							<img
// 								src={previewImg}
// 								className='h-8 w-8 new-blog-img'
// 							/>
// 						)}
// 					</span>
// 					<label
// 						htmlFor='file-input'
// 						className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'
// 					>
// 						<button style={{ color: 'black' }}>Upload Photo</button>
// 						<input
// 							type='file'
// 							name='avatar'
// 							id='file-input'
// 							accept='.jpg,.jpeg,.png'
// 							onChange={handleFileInputChange}
// 							className='sr-only'
// 							style={{ display: 'none' }}
// 						/>
// 					</label>
// 				</div>
// 			</div>

// 			{/* -------------------------------------article body */}
// 			<Form.Group
// 				className='mb-3'
// 				controlId='exampleForm.ControlTextarea1'
// 			>
// 				<Form.Label>Example textarea</Form.Label>
// 				<Form.Control
// 					as='textarea'
// 					rows={3}
// 				/>
// 			</Form.Group>
// 		</Form>
// 	);
// };

// export default Admin;
