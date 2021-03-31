const express = require('express');
const { Pinjaman } = require('../models');

const app = express();

app.get('/', (req, res) => {
    console.log("dari middleware authorization ", req.payload);
    Pinjaman.find({}, "-__v").populate("user_id", "-__v").populate("book_id", "-__v")
    .then(result => {
        res.json(result);
    })
    .catch(e => console.log(e));
});

app.post('/', (req, res) => {
    // nextCounter()
    // .then(result => {
    //     Pinjaman.create({...req.body, "_id" : result})
    //     .then(result => {
    //         res.send(result);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         res.status(500).send(e);
    //     });
    // });
    Pinjaman.create({...req.body})
        .then(result => {
            res.send(result);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
});

app.delete('/:id', (req, res) => {
    Pinjaman.deleteOne(
        {"_id": req.params.id}
    )
    .then(result => {
        if(result.deletedCount > 0){
            res.json({
                message: "Berhasil delete"
            })
        }else{
            res.json({
                message: "ID tidak ditemukan atau gagal delete"
            })
        }
    })
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.put('/:id', (req, res) => {
    Pinjaman.updateOne(
        {"_id": req.params.id},
        {...req.body}
    )
    .then(result => {
        console.log(result)
        if(result.nModified > 0){
            res.json({
                message: "Berhasil update"
            })
        }else{
            res.json({
                message: "ID tidak ditemukan atau gagal update"
            })
        }
    })
})

module.exports = app;