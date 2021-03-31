const express = require('express');
const { Buku } = require('../models');

const app = express();

app.get('/', (req, res) => {
    Buku.find({})
    .then(result => {
        res.send(result);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.get('/:id', (req, res) => {
    Buku.find(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.post('/', (req, res) => {
    // nextCounter()
    // .then(result => {
    //     Buku.create({...req.body, "_id" : result})
    //     .then(result => {
    //         res.send(result);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         res.status(500).send(e);
    //     });
    // });
    Buku.create({...req.body})
        .then(result => {
            res.send(result);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
});

app.delete('/:id', (req, res) => {
    Buku.deleteOne(
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
    Buku.updateOne(
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