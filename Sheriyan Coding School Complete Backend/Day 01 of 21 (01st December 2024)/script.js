const fs = require("fs")


// // To Create a new File in a directory using Node JS  
// fs.writeFile("myFirstFileInNode.txt" , "This is the first file in the node js created by me" , function(err) {
//     if (err) return console.log(err)
//         else console.log("File Has been created")    
// })

// // To Update the text of a new File in a directory using Node JS  

// fs.appendFile("myFirstFileInNode.txt", "\nThis is the updated content of file using appendFile in Node JS" , function(err) {
//     if (err) {
//         return console.error("Error => " , err)
//     }
//     else {
//         return console.log("File Appended =>")
//     }
// })


// If You want to rename the file name then , you can rename it using:  

fs.rename("myFirstFileInNode.txt" , "RenamedFile.txt" , function(err) {
    if (err) console.log("Err")   
    else console.log("File Renamed")
})