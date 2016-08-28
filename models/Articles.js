'use strict';

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
	author: { type: String, required: true },
	content: { type: String, unique: true, required: true },
	creation_date: { type: Date, default: new Date(), unique: false },
	modification_date: { type: Date },
	title: { type: String, unique: true, required: true }
});

mongoose.model('Article', ArticleSchema);
