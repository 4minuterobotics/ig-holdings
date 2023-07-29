import {
	colorSharp,
	colorSharp2,
	medicalShield,
	counseling,
	heart,
	monitor,
	house,
	clinic,
	website1,
	website2,
	website3,
	website4,
	blog1,
	blog2,
	blog3,
	blog4,
	blog5,
	navIcon1,
	navIcon2,
	navIcon3,
	logoNoBg,
	logoColorBg,
} from '../assets';

export const services = [
	{
		id: 1,
		title: 'Behavorial Health Intergration',
		imgUrl: counseling,
	},
	{
		id: 2,
		title: 'Patient-Centered Medical Homes (PCMH)',
		imgUrl: house,
	},
	{
		id: 3,
		title: 'Community Health Centers',
		imgUrl: clinic,
	},
	{
		id: 4,
		title: 'Chronic Care Management Programs',
		imgUrl: heart,
	},
];

export const projects = [
	{
		title: 'IG Counseling',
		description:
			'By combining physical and mental health services, our providers can better address the mental and emotional well-being of patients and identify potential health issues early on.',
		imgUrl: website1,
		tags: [
			{
				name: 'counseling',
				color: 'blue-text-gradient',
			},
			{
				name: 'substance abuse services',
				color: 'green-text-gradient',
			},
			{
				name: 'confidential',
				color: 'orange-text-gradient',
			},
		],
		website_link: 'https://facebook.com',
	},
	{
		title: 'IG Chronic Care',
		description:
			'These programs are designed to support patients with chronic conditions, such as diabetes, heart disease, or asthma, by coordinating their care across various healthcare providers and specialties.',
		imgUrl: website2,
		tags: [
			{
				name: 'prevention plans',
				color: 'blue-text-gradient',
			},
			{
				name: 'LPN ran',
				color: 'green-text-gradient',
			},
			{
				name: 'helping mfs',
				color: 'orange-text-gradient',
			},
		],
		website_link: 'https://instagram.com',
	},
	{
		title: 'IG Remote Monitoring',
		description:
			'Utilizing telehealth and remote monitoring technologies allows healthcare providers to offer virtual care and follow-up for patients, enhancing access to services and improving care continuity.',
		imgUrl: website3,
		tags: [
			{
				name: '24/7',
				color: 'blue-text-gradient',
			},
			{
				name: 'survailance avilable',
				color: 'green-text-gradient',
			},
			{
				name: 'on call assistance',
				color: 'orange-text-gradient',
			},
		],
		website_link: 'https://google.com',
	},
	{
		title: 'IG Health Centers',
		description: 'Community health centers play a crucial role in providing integrated health services to underserved populations.',
		imgUrl: website4,
		tags: [
			{
				name: 'medical',
				color: 'blue-text-gradient',
			},
			{
				name: 'dental',
				color: 'green-text-gradient',
			},
			{
				name: 'behaviorial',
				color: 'orange-text-gradient',
			},
		],
		website_link: 'https://myspace.com',
	},
];

export const experiences = [
	{
		title: 'What We Help With',
		company_name: 'What we help with',
		icon: medicalShield,
		iconBg: '#383E56',
		date: 'March 2023 - Present',
		points: [
			'We provide psychiatric therapy to individuals struggling with various mental health challenges. Our mental health centers offer treatment for mental illnesses and are equipped with state-of-the-art facilities. Our dedicated team of mental health professionals is committed to assisting individuals from diverse backgrounds, ages, and ethnicities on their path to recovery. We understand the difficulties associated with seeking help, and we have successfully supported thousands of individuals in overcoming their mental health issues and leading fulfilling lives. Contact us today to learn more about how we can help you.',
		],
	},
	{
		title: 'How We Help',
		company_name: 'How we help',
		icon: medicalShield,
		iconBg: '#E6DEDD',
		date: 'June 2021 - Present',
		points: [
			"Our mental therapy programs are designed to provide comprehensive assistance to individuals seeking recovery. We understand that taking the first step towards recovery can be challenging, which is why we offer personalized treatment plans tailored to each individual's needs. Our mental facilities cater to a diverse range of requirements, whether you prefer inpatient therapy or outpatient services. We prioritize your well-being and will help you choose the most suitable mental health center based on your specific circumstances. Whether you require a facility covered by your insurance plan or desire a more luxurious and serene environment, we are here to guide you. Contact us to explore how we can assist you on your journey to mental wellness.",
		],
	},
	{
		title: 'Where We Help',
		company_name: 'Where we help',
		icon: medicalShield,
		iconBg: '#383E56',
		date: 'Aug 2014 - May 2021',
		points: [
			'Our mental health centers are strategically located across the country, serving major cities and states. We ensure easy access to treatment by having affiliated centers near you. However, we recognize that some individuals may prefer seeking help away from their usual surroundings, which can be beneficial in certain cases. Our goal is to make it convenient for you to find a mental health center regardless of your location. Our facilities are designed to provide a clean and modern environment staffed with compassionate professionals. We acknowledge the challenges of seeking help and have supported numerous individuals in their journey to recovery. Reach out to us to discover how we can support you in achieving optimal mental well-being.',
		],
	},
];
export const blogArticles = [
	{
		id: 1,
		imgUrl: { blog2 },
		date: 'March 26, 2023',
		text: "Survival skills are a must. Here's what we did and learned at Suvivor Camp.",
	},

	{
		id: 2,
		imgUrl: { blog3 },
		date: 'March 26, 2023',
		text: "Survival skills are a must. Here's what we did and learned at Suvivor Camp.",
	},
	{
		id: 3,
		imgUrl: { blog4 },
		date: 'March 26, 2023',
		text: "Survival skills are a must. Here's what we did and learned at Suvivor Camp.",
	},

	{
		id: 4,
		imgUrl: { blog5 },
		date: 'March 26, 2023',
		text: "Survival skills are a must. Here's what we did and learned at Suvivor Camp.",
	},
];
