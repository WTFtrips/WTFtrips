const mongoose = require('mongoose');

// Book Schema to add it to mongo database
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		unique: true
	},
	genre:{
		type: String
	},
	description:{
		type: String
	},
	author:{
		type: String
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	link:{
		type:String
	},
	image_url:{
		type: String
	},
	user_id:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	type:{
		type:String
	},
	approved:{
		type:String
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books from mongo data base
module.exports.getBooks = (callback) => {
	Book.find(callback);
}

module.exports.updateBooks = (book,val,callback) => {
	Book.update(book,val,callback);
}


// Add Book to mongo data base
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

