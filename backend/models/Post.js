const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
}, {
    collection: 'posts'
})

module.exports = mongoose.model('Post', postSchema)