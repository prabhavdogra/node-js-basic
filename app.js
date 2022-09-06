const express = require('express');

const morgan = require('morgan')

const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listening for requests
app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (request, response) => {
	const blogs = [
		{title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		{title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		{title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
	];
	response.render('index', {title: "Home", blogs: blogs});
});
app.get('/about', (request, response) => {
	response.render('about', {title: "About"});
});
app.get('/about-us', (request, response) => {
	response.redirect('about');
});
app.get('/blogs/create', (request, response) => {
	response.render('create', {title: "Create"});
});
// 404 page
app.use((request, response) => {
    // Default page, it is supposed to be at the end
	// We need to manually set status code in this case
	response.status(404).render('404', {title: "Error"});
});