const express = require("express");
const app = express();
const path = require("path");

const staticpath = path.join(__dirname,"/public");
app.use(express.static(staticpath));

app.set('view engine', 'hbs')
app.get("/home", (req,res) => {
    res.render('home');
});

app.listen(40 , () => {
    console.log('listening to server');
})