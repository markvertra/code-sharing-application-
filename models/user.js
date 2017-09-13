const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
	username: {type: String},
	password: {type: String},
	email: {type: String},
	projectIDs: [{type: Schema.Types.ObjectId,
     			  ref: 'Project'}],
	role: {type: String},
	timestamp: { createdAt: "created_at", updatedAT: "updated_at"}
})

const User = mongoose.model('user', userSchema);
module.exports = User;
