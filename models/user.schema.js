/* eslint-disable new-cap */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
});
const User = new mongoose.model('user', userSchema);

module.exports = User;
