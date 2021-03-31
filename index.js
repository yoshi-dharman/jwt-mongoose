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
    res.send("<h1 style='text-align:center; padding-top:3rem'>Welcome to my Api Todo ⊂◉‿◉つ</h1>"+
    "<h3 style='text-align:center;'>/all to see the data relation (only GET ALL)</h3>"+
    "<h3 style='text-align:center;'>/user to see the data user</h3>"+
    "<h3 style='text-align:center;'>/todo to see the data todo</h3>")
})

if(dbConfigMongo) {
    app.listen(LocalPort, ()=>{
        console.log("server running at ", LocalPort);
    });
} else {
    console.log("Not Connected");
}
