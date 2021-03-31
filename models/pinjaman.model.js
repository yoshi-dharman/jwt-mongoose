const mongoose = require('mongoose');

const PinjamanSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buku"
    }
});

const Pinjaman = mongoose.model('pinjaman', PinjamanSchema);

// Todo.collection.createIndex(
//     { "_id": 1 },
//     { unique: true },
// );

module.exports = Pinjaman;