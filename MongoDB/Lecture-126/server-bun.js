import {serve} from "bun";

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === "/" || url.pathname === "/index.html") {
          return new Response("Welcome to the index page by bun !!", {
            status: 200,
          });
        } else if (url.pathname === "/about.html") {
          return new Response("Welcome to the about page by bun !!", {
            status: 200,
          });
        } else if (url.pathname === "/contact.html") {
          return new Response("Welcome to the contact page by bun !!", {
            status: 200,
          });
        } else{
            return new Response("Err : File Not Found !!", {
              status: 404,
            });
        }
    },
    port: 3001,
    hostname : "127.0.0.1"
});