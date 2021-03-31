const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/');
const {JWT_KEY} = require('../config');

router.post("/register", async (req, res) => {
    const user = req.body;


    const hashPassword = await bcrypt.hash(user.password, 10);
    if(!hashPassword) throw new Error("error hash password")

        User.create({
            name: user.name,
            password : hashPassword
        })
        .then(result => {
            res.json({
                message: "user berhasil dibuat",
                data: result
            })
        })
        .catch(e => console.log(e))

})

router.post("/login", (req, res) => {
    const {name, password} = req.body;

    User.findOne({name})
    .then(result => {
        if(result && bcrypt.compareSync(password, result.password)){
            const {password, ...payload} = result.toObject();

            const token = jwt.sign(payload, JWT_KEY);
            res.json({
                message: "sucess login",
                data: payload,
                token
            });
        }else{
            res.json({
                message: "email or pass invalid"
            })
        }
    })
    .catch(e => console.log(e))


})

module.exports = router;