import React from 'react';
import SideWidget from './sideWidget';


const widgetInfo = [
	{
			id: 1,
			name: 'Twitter Widget',
			description: 'Easily Access Your Twitter Your Account!'
	},
	{
			id: 2,
			name: 'Facebook Widget',
			description: 'Access Your Facebook from Anywhere'
	},
	{
			id: 3,
			name: 'Job Tool Widget',
			description: 'Update Your Job Clock'
	},
	{
			id: 4,
			name: 'PeopleLinx Widget',
			description: 'Book Holiday, Sort out stuff, and more'
	},
	{
			id: 5,
			name: 'Calender',
			description: 'Link your Calender'
	},
	{
			id: 6,
			name: 'Calculator',
			description: 'Calculate things'
	},
	{
			id: 7,
			name: 'Youtube Widget',
			description: 'Watch videos inside the website'
	},
	{
			id: 8,
			name: 'Stock Market Widget',
			description: 'Closely follow Stock Market Trends'
	},
	{
			id: 9,
			name: 'Netflix Videos',
			description: 'Follow your Netflix account'
	},
	{
			id: 10,
			name: 'Set List',
			description: "Play Music? Here's your set list"
	},
	{
			id: 11,
			name: 'To-Do List',
			description: 'Things you need to do'
	},
	{
			id: 12,
			name: 'Budget Widget',
			description: 'Accurate budgeting at your fingertips'
	},
		{
			id: 1,
			name: 'Twitter Widget',
			description: 'Easily Access Your Twitter Your Account!'
	},
	{
			id: 2,
			name: 'Facebook Widget',
			description: 'Access Your Facebook from Anywhere'
	},
	{
			id: 3,
			name: 'Job Tool Widget',
			description: 'Update Your Job Clock'
	},
	{
			id: 4,
			name: 'PeopleLinx Widget',
			description: 'Book Holiday, Sort out stuff, and more'
	},
	{
			id: 5,
			name: 'Calender',
			description: 'Link your Calender'
	},
	{
			id: 6,
			name: 'Calculator',
			description: 'Calculate things'
	},
	{
			id: 7,
			name: 'Youtube Widget',
			description: 'Watch videos inside the website'
	},
	{
			id: 8,
			name: 'Stock Market Widget',
			description: 'Closely follow Stock Market Trends'
	},
	{
			id: 9,
			name: 'Netflix Videos',
			description: 'Follow your Netflix account'
	},
	{
			id: 10,
			name: 'Set List',
			description: "Play Music? Here's your set list"
	},
	{
			id: 11,
			name: 'To-Do List',
			description: 'Things you need to do'
	},
	{
			id: 12,
			name: 'Budget Widget',
			description: 'Accurate budgeting at your fingertips'
	},
	
]

function Sidebar(){

	const widgetComponent = widgetInfo.map((widget, i) => {
		return <SideWidget title = { widgetInfo[i].name } description = { widgetInfo[i].description } key = {[i]} />
	})

	return (
		<div className = "sidebar">
			{ widgetComponent }
		</div>
		)
}


export default Sidebar;
