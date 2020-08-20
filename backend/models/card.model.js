const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	cardName:{
		type: String;
		required: true;
	}
	cardType:{
		type: String;
		required: true;
	}
	cardAttribute:{
		type: String;
		required: true;
	}
	cardSet:{
		type: String;
		required: true;
	}
	cardDesc:{
		type: String;
		required: true;
	}	
});

const Card = mongoose.model('Card',CardSchema);
module.exports = Card; 