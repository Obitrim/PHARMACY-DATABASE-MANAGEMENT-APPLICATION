const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		minLength: 4,
		required: true
	},
	FDANumber: {
		type: String,
		trim: true,
		validate: {
			validator: value => /[0-9]{11}/gi.test(value),
			message: props => `${props.value} is not a valid FDA number`
		},
		required: true
	},
	manufacturer: {
		type: String,
		required: true
	},
	administrationMethod: {
		type: String,
		required: true
	},
	expirationDate: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		min: 1,
		required: true
	}
});

module.exports = mongoose.model('drugs', drugSchema);