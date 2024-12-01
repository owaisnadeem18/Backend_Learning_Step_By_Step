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

// fs.rename("myFirstFileInNode.txt" , "RenamedFile.txt" , function(err) {
//     if (err) console.log("Err")   
//     else console.log("File Renamed")
// })

// ---------------------- Copy File --------------------

// If you want to copy a file text into another , then you can use the following syntax:


// fs.copyFile("RenamedFile.txt", "./CopiedFile/copiedFile.txt", (err) => {
//     if (err) console.error(err)
//     else console.log("CopiedFile has been copied successfully")    
// })


// ---------------------- Delete a File --------------------
    
// If you want to delete a file , then you can use the following syntax:

// fs.unlink("deleted_file.txt" , (err) => {
//     if (err) console.error(err)
//     else console.log("File has been deleted successfully")
// })

// Creating a new Folder:

// fs.mkdir("new-folder", {recursive: true} , function(err) {
//     if (err) { console.error(err) }
//     else { console.log("New Folder has been created") }
// })

// Creating a new file inside a directory

// fs.writeFile("./new-folder/newFile.txt" , "I am a new file inside the new folder" , function(err) {
//     if (err) { console.error(err) }
//     else { console.log("New Filde inside the new folder has been created") }
// })

// If I want to delete an entire folder which is empty:

// fs.rm("new-folder" , {recursive: true} , function(err){
//     if (err) { console.error(err.message) }
//     else { console.log("New Folder has been deleted successfully") }
// })

// If You want to read a new file:

// fs.readFile("RenamedFile.txt", function(err , data){
//     if(err) return console.error("Error reading file")    
    
//     else {
//         console.log("File Contents: " + data)
//     }    
// })

// If you wanna read the file in a loud voice 

const say = require('say');

// Read the file
fs.readFile("RenamedFile.txt", "utf8", function(err, data) {
    if (err) {
        return console.error("Error reading file:", err);
    } else {
        // Log the file contents to the console
        console.log("File Contents: " + data);
        
        // Speak the contents of the file
        say.speak(data, null, 1.0, (err) => {
            if (err) {
                return console.error("Error speaking text:", err);
            }
            console.log("Text has been read aloud.");
        });
    }
});
