const express = require('express');
const { User } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    User.find({}, "-__v")
    .then(result => {
        res.send(result);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.get('/:id', (req, res) => {
    User.find(
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
    //     User.create({...req.body, "_id" : result})
    //     .then(result => {
    //         res.send(result);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         res.status(500).send(e);
    //     });
    // });
    User.create({...req.body})
        .then(result => {
            res.send(result);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
});

app.delete('/:id', (req, res) => {
    User.deleteOne(
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
    User.updateOne(
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