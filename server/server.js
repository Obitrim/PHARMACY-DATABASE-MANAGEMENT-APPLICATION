const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Instantiating app
const app = express();
/**
 *
 * GLOBAL MIDDLEWARES
 *
 */
app.use(helmet());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
/**
 *
 * DATABASE CONNECTION
 *
 */
mongoose.connect('mongodb://localhost/pharmacy', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => console.log('Connected to database'));
connection.on('error', error => console.log('Error connecting to database', error));
/**
 *
 * ROUTES
 *
 */
app.use('/drugs', require('./routers/drugs'));
app.use('/reports', require('./routers/reports'));
app.use('/receipts', require('./routers/receipts'));
app.use('/manufacturer', require('./routers/manufacturers'));

app.listen(
	process.env.PORT || 3030, 
	() => console.log(`server started on port ${process.env.PORT || 3030}`)
);