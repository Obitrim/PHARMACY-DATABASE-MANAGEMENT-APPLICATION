const express = require('express');
const helmet = require('helmet');

// Instantiating app
const app = express();

// Global Middlewares
app.use(helmet());

app.get('/', (req, res) => {
	res.send('Hello, Server is set up');
});

app.listen(
	process.env.PORT || 3030, 
	() => console.log(`server started on port ${process.env.PORT || 3030}`)
);