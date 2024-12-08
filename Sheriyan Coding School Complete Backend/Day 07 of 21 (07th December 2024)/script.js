const express = require("express")

const app = express()

app.get("/profile/:username" , (req, res) => {
    res.send(`Welcome ${req.params.username} `)
})

app.get("/" , (req , res) => {
    res.send("Today I am learning about the Dynamic routes in Express")
})

app.listen(3000)