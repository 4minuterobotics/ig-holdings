import React from 'react';
import Article from '../../components/article/Article';
import { blogArticles } from '../../data';

import { blog1, blog2, blog3, blog4, blog5 } from '../../assets';
import './blog.css';

const Blog = () => (
	<div
		className='rd__blog section__padding container'
		id='blog'
	>
		<div className='rd__blog-heading'>
			<h1 className='gradient__text'>
				A lot is happening, <br /> We are blogging about it.
			</h1>
		</div>
		<div className='rd__blog-container'>
			<div className='rd__blog-container_groupB'>
				{blogArticles.slice(0, 4).map((article, index) => {
					return (
						<Article
							key={index}
							imgUrl={article.imgUrl}
							date={article.date}
							text={article.text}
						/>
					);
				})}
				{/* <Article
					imgUrl={blog2}
					date='March 26, 2023'
					text="Survival skills are a must. Here's what we did and learned at Suvivor Camp."
				/>
				<Article
					imgUrl={blog3}
					date='March 26, 2023'
					text="Survival skills are a must. Here's what we did and learned at Suvivor Camp."
				/>
				<Article
					imgUrl={blog4}
					date='March 26, 2023'
					text="Survival skills are a must. Here's what we did and learned at Suvivor Camp."
				/>
				<Article
					imgUrl={blog5}
					date='March 26, 2023'
					text="Survival skills are a must. Here's what we did and learned at Suvivor Camp."
				/> */}
			</div>
		</div>
	</div>
);

export default Blog;
