const express = require('express');
const route = require("./routes/route.js");
const mongoose = require('mongoose');

const app = express();

// to parse json data from request object
app.use(express.json());


// connect to database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://AkshayGaikwad:Akshay143@cluster0.ii90wme.mongodb.net/Akshay009", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);

app.use("/*", function (req, res) {
    res.status(400).send({ status: false, message: "The api you request is not available" })
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
