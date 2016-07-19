'use strict';

import mongoose from 'mongoose';

var PhotoSchema = new mongoose.Schema({
	name	: String,
	info	: String,
	active	: Boolean,

	title	:	String,
	description	:	String,
	link	:	String,
	
	user	:	{type: mongoose.Schema.Types.ObjectId, ref : 'User'},
	plant	:	{type: mongoose.Schema.Types.ObjectId, ref : 'Plant'},
	createdAt	:	{type: Date, default: Date.now()},

	imgur : {}
});

export default mongoose.model('Photo', PhotoSchema);


/*	imgur image model

		account_id	:	Number,
		account_url	:	String,
		animated	:	Boolean,
		bandwidth	:	Number,
		datetime	:	Number,
		deletehash	:	String,
		description	:	String,
		favorite	:	Boolean,
		height		:	Number,
		id			:	String,
		in_gallery	:	Boolean,
		link		:	String,
		name		:	String,
		nsfw		:	Boolean,
		section		:	Boolean,
		size		:	Number,
		title		:	String,
		type		:	String,
		views		:	Number,
		vote		:	Boolean,
		width		:	Number
		
*/