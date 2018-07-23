import React from 'react';
import NewsItem from './newsItem';

 const newsFeedArray = [
	{
		id:1,
		title:'Facebook',
		description:'12 new Facebook notifications'
	},
	{
		id:2,
		title:'Twitter',
		description:'12 new Facebook notifications'
	},
	{
		id:3,
		title:'Notification 1',
		description:'12 new Facebook notifications'
	},
	{
		id:4,
		title:'Notification 4',
		description:'12 new Facebook notifications'
	},
	{
		id:5,
		title:'Notification 5',
		description:'12 new Facebook notifications'
	},
	{
		id:6,
		title:'Notification 6',
		description:'12 new Facebook notifications'
	},
	{
		id:7,
		title:'Notification 7',
		description:'12 new Facebook notifications'
	},
	{
		id:8,
		title:'Notification 9',
		description:'12 new Facebook notifications'
	},


]

function NewsFeed(props) {

		const newsFeedList = newsFeedArray.map((item, i) => {
			return <NewsItem title = { newsFeedArray[i].title } key = {[i]} description = {newsFeedArray[i].description}/>
		});

		return(
			<div className = "newsfeed-wrapper">
				{ newsFeedList }
			</div>
		)
}

export default NewsFeed;