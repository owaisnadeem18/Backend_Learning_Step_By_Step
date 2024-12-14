const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")

app.set("view engine" , "ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req , res) => {
    fs.readdir("./files" , (err , files) => {
        res.render("index" , {owais: files})
    })
})

app.get("/files/:fileName" , (req , res) => {
    fs.readFile(`./files/${req.params.fileName}` , "utf-8" , function(err , fileData) {
        res.render("show" , {fileKaNaam: req.params.fileName , fileData });
        console.log(fileData)
    })
})

app.post("/create" , function(req , res) {
    fs.writeFile(`./files/${req.body.TaskName.split(" ").join("")}.txt` , req.body.TaskDetail , function(err) {
        res.redirect("/")
    })
})

app.listen(3000)