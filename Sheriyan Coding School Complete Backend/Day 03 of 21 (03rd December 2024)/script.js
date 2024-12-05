const owais = require("express");
const req = require("express/lib/request");

const app = owais();

app.get("/" , (req , res) => {
    res.send("This is Home page")
})

app.get("/profile" , (req , res) => {
    res.send("This is Profile page");
})

app.listen(3000)