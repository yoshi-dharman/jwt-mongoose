const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

const User = mongoose.model('user', UserSchema);

// User.collection.createIndex(
//     { "_id": 1 },
//     { unique: true },
// );

module.exports = User;