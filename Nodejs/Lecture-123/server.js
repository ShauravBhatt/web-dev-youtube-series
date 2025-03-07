const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 3000;

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname , (req.url === "/") ? "index.html" : req.url);
    const extName = String(path.extname(filePath)).toLowerCase();
    const mimeType = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
        ".png" : "image/png",
        ".json" : "text/json"
    }
    const contentType = mimeType[extName] || "application/octet-stream";
    fs.readFile(filePath , (err,content)=>{
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead(404, { "content-type": "text/html" });
                res.end("Error: file not found brooo !!");
            }
        }else{
            res.writeHead(200,{"content-type":contentType});
            res.end(content,"utf-8")
        }
    })
});

server.listen(port,()=>{
    console.log(`Server is Started !!\nListening on Port ${port}`);
});
