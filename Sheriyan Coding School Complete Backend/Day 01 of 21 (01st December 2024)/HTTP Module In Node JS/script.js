const http = require("http");

const server = http.createServer((req, res) => {
    // Log the HTTP request method and URL
    console.log(`Request received with method: ${req.method} at URL: ${req.url}`);
    
    res.end("A Very First Backend Server has been made by me");
});

server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
