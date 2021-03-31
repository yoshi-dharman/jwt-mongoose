const mongoose = require('mongoose');

const BukuSchema = new mongoose.Schema({
    book_name: {
        type: String,
        require: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // }
});

const Buku = mongoose.model('buku', BukuSchema);

// Todo.collection.createIndex(
//     { "_id": 1 },
//     { unique: true },
// );

module.exports = Buku;