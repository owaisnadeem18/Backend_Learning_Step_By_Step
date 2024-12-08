const express = require("express")

// Sessions and Cookies theory Understanding

// Cookies:

// Definition: Cookies browser me small text files hain jo server ki taraf se store hotay hain.
// Purpose: Temporary ya long-term user data store karne ke liye.
// Storage: User ke browser me store hoti hain.
// Size Limit: Typically, 4KB tak ki information.

// Sessions:

// Definition: Session server-side hota hai, jo user ke interaction ko track karta hai during a single visit.
// Purpose: Securely temporary data store karne ke liye.
// Storage: Server-side maintain hoti hain, aur browser me sirf ek session ID save hoti hai (via cookie ya URL).
// Size Limit: Larger data store kar sakti hain kyunki server-side hoti hain.

const app = express();

app.get("/" , (req , res) => {
    res.send("Learning Node JS and Express Js")
})

app.listen(3000);
