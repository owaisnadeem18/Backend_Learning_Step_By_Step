const express = require("express")
const app = express();
const path = require("path")

// Form Handling: 

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// To link all the static files we use the following syntax
app.use(express.static("wo path jahan tamam public key files mojud hain"))
app.use(express.static(path.join(__dirname , "public")))
  
app.set("view engine" , "ejs")

app.get("/" , (req , res) => {
    res.render("index")
})

app.listen("3000")