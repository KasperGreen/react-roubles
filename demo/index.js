import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../src';
import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
	<MyComponent />,
		document.querySelector('#react-app')
	);
});