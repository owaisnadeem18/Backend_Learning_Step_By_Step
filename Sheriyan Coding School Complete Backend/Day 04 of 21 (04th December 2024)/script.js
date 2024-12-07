const express = require("express")
const owais = express()

// Here we are going to create a very first middleware in express js using (app.use())


// ----- There are two different ways to add middlewares in express js 

// 1. Application-level Middleware 
// 2. Route-Specific Middleware

// 1.Application-level Middleware:
// app.use(function(req , res , next) {
// })  // syntax 

// owais.use((req , res , next) => {
//     console.log("First Middleware") // an example
//     next();
// })

// owais.use((req , res , next) => {
//     console.log("Second Middleware") // an example
//     next();
// })

// 2. Route Specific Middleware 

owais.get(("/") , (req , res , next) => {
    console.log("Route specific middleware for '/' route ")   
    next();
} , (req , res) => {
    res.send("Learning Middlewares in Express")
})

owais.get("/about" , (req , res , next) => {
    console.log("I am middleware route for '/about' route ")
    next();
}, (req , res) => {
    res.send("I am about route..")
})

// Let's talk about the very last thing , which is the error handling in express

owais.get("/profile" , ( req , res , next) => {
   return next(new Error("Custom error"))
})

owais.use((err , req , res , next) => {
    console.error(err.stack)
    res.status(500).send("Error a gya hay custom wala")
})

owais.listen(4000)


