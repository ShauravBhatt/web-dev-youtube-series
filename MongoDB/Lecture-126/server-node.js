const http = require("http");

const port = 3001;

const server = http.createServer((req,res) => {
    if (req.url === "/" || req.url === "/index.html") {
      res.writeHead(200, "Served Index Page", { "content-type": "text/plain" });
      res.end("Welcome to the index page by node !!");
    } else if (req.url === "/about.html") {
      res.writeHead(200, "Served About Page", { "content-type": "text/plain" });
      res.end("Welcome to the About page by node !!");
    } else if (req.url === "/contact.html") {
      res.writeHead(200, "Served Contact Page", { "content-type": "text/plain" });
      res.end("Welcome to the Contact page by node !!");
    } else{
        res.writeHead(404, "Error", {
          "content-type": "text/plain",
        });
        res.end("Err: File not found !!");
    }
});

server.listen(port,()=>{
    console.log(`Server is running and listening at port ${port}...`);
})