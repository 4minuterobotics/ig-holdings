import React from 'react';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = (props) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			iconStyle={{ background: props.experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={props.experience.icon}
						alt={props.experience.company_name}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[24px] font-bold'>{props.experience.title}</h3>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{props.experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
