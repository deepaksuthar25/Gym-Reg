const express = require("express");
const path = require('path');
const app = express();
const fs = require('fs');

port = 80;

// EPRESS SPECIFIC STUFF
app.use("/static", express.static('static'));   // for serving static file
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');     // set the view engine as a pug
app.set('views', path.join(__dirname, 'views'));    // set the views directory

// ENDPOINTS
app.get("/", (req, res) => {

    const msg = 'we are using plain html in pug';
    const params = { 'title': "pubG is the best game", 'message': msg }
    res.status(200).render("index.pug", params);
});

app.post('/', (req, res) => {
    // console.log(req.body);
    nam = req.body.nam;
    age = req.body.age;
    email = req.body.email;
    address = req.body.address;
    aboutyou = req.body.aboutyou;

    let outputTowrite = `The name is ${nam}, ${age} years old, email is ${email}, currently live in ${address}.
    and more about her/him: ${aboutyou}`
    fs.writeFileSync('output.txt', outputTowrite);
    const param = { 'message': "Form submitted succesefully" }
    res.status(200).render('index.pug', param);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`app has succesefully running on port ${port}`);
});





// our pug demo end-point
// app.get("/demo", (req,res) => {
//     res.status(200).render('demo' , {title: "hey harry", message:"thanks for telling that how to use pug!"});
// })

// app.get("/" , (req,res) => {
//     res.status(200).send("this is home page of first express app");
// });

// app.get("/about" , (req,res) => {
//     res.status(200).send("this is about page of first express app");
// });

// app.post("/about" , (req,res) => {
//     res.status(200).send("this is post request of about page.");
// });

// app.get("/service" , (req,res) => {
//     res.status(200).send("this is service page of our first express app");
// });

// app.get("/contact" , (req,res) => {
//     res.status(200).send("this is contact page of our express app");
// });

// app.get("/this" , (req,res) => {
//     res.status(400).send("error to open this");
// });

// app.listen(port, () => {
//     console.log(`app has succesefully running on port ${port}`);
// });