const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json())
mongoose.connect("mongodb+srv://Avacado:Avacado@cluster0.bu2ko.mongodb.net/testDB",
    {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
//create a new data schema
const testSchema = {
    name: String,
    email: String,
    number: Number,
    description: String
}
const Note = mongoose.model("Note", testSchema);

app.get("/", function (req, res) {
    res.send("The backend is up and running !!!")
});

app.post("/contactus", (req, res) => {
    let newNote = new Note({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        description: req.body.description
    });
    console.log(req.body)
    newNote.save();
    console.log("data sent successfully")
    res.send("successful");
});

app.listen(5000, function () {
    console.log("Server is running on port 5000");
})