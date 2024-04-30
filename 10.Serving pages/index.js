//let's see how actual work node js http routing
//01.open the tenminal and cd to current folder dir
//type npm init -y to get json
//in  the package add type -> module
//create public folder and include 2 html page

//01. first import the http and fs module
import http from 'http';
import fs from 'fs';
import { error } from 'console';

//create server
const server =  http.createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead(200, "OK" , {"content-type":"text/html"})
        fs.readFile("./public/home.html", (error, data) =>{
            if(error) throw error;
            res.end(data)
        })
    }
    else if(req.url === '/about'){
        res.writeHead(200, "OK" , {"content-type":"text/html"})
        fs.readFile("./public/about.html", (error, data) =>{
            if(error) throw error;
            res.end(data)
        })
    }
    else{
        res.writeHead(404, "BAD", {"content-type": "text/html"})
        res.end("<h2>404 not found </h2>")
    }

})

//listen the port and check the port work or not
server.listen(8000, () => console.log("server up"))