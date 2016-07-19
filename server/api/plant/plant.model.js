'use strict';

import mongoose from 'mongoose';

var PlantSchema = new mongoose.Schema({
	name: String,
	info: String,
	active: Boolean,
	dob : Date,
	species : String,
	
	
	user	:	{type: mongoose.Schema.Types.ObjectId, ref : 'User'},
	photos:[String],

});

export default mongoose.model('Plant', PlantSchema);
