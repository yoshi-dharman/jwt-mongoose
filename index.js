const express = require('express');
const app = express();
const cors = require('cors');
const { PORT, dbConfigMongo } = require('./config');
const LocalPort = PORT || 3000;

const routes = require('./routes');
const { Counter, User, Todo } = require('./models');

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send("<h1 style='text-align:center; padding-top:3rem'>Welcome to my Api ⊂◉‿◉つ</h1>"+
    "<h3 style='text-align:center;'>/user, /buku, /pinjaman</h3>")
})

if(dbConfigMongo) {
    app.listen(LocalPort, ()=>{
        console.log("server running at ", LocalPort);
    });
} else {
    console.log("Not Connected");
}
