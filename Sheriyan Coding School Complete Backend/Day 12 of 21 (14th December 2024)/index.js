// const express = require('express')

// const app = express()

// const userModel = require("./usermodel")

// app.get('/' , (req , res) => {
//     res.send("Express App")
// })

// app.get('/create' , async (req , res) => {
//     await userModel.create({
//         name: "John Doe",
//         age: 30,
//         email: "john@example.com"
//     })
// })


// app.listen(3000) 

const express = require("express")

const app = express()

const userModel = require("./usermodel")

app.get("/" , (req , res) => {
    res.send("Express App is working") 
}) 


// Here we have to perform CRUD , for this right now we are first creating a user 


// 1--- Create 
app.get("/create" , async (req , res) => {
    let createdUser = await userModel.create({
        name: "Hamza Arshad" , 
        username: "hamzaArshad2432" , 
    })
    console.log("User Created" , createdUser)
    res.send(createdUser)
})

// 2--- Read 
app.get("/read" , async (req , res) => {
    // let readUser = await userModel.find({})
    
    // Important Questions:

    // Find gives u an array , while findOne gives u an object

    let readOneUser = await userModel.find({username: "owaisNadeem"})
    res.send(readOneUser)
})

// 3--- Update:

app.get("/update" , async (req , res) => {
    
    let updatedUser = await userModel.findOneAndUpdate({username: "owaisNadeem"} , {name: "Muhammad Owais Nadeem"} , {new:true})
    
    res.send(updatedUser)

})

// 4--- Delete:

app.get("/delete" , async (req , res) => {
    let deletedUser = await userModel.findOneAndDelete({username: "hamzaArshad2432"})
    res.send(deletedUser)
})


app.listen(3000)