const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    parent1: String,
    parent2: String,
    level: String,
});

module.exports = mongoose.model('video', videoSchema, 'videos');
