import http from 'http';


const server =  http.createServer((req, res) => {
    //routing
    // console.log(req.url); // what i search like localhost:8000/pathum then show that
    if (req.url === '/') {
        res.writeHead(200, "OK" , {"content-type" : "text/html"});
        res.end("<a href='./contact'>Contact</a>");
    }
    
    
    else if(req.url === '/about'){
        res.writeHead(200, "OK" , {"content-type" : "text/html"});

        res.end("<h1>About</h1>");
    }
    else if(req.url === '/contact'){
        res.writeHead(200, "OK" , {"content-type" : "text/html"});

        res.end("<h1>Contact</h1>");
    }

    else{
        // console.log(req.url);
        res.writeHead(404, "BAD" , {"content-type" : "text/html"});

        res.end("<h1>404  not found!  :(<h1/>")
    }
})



server.listen(8000, () => console.log('server up!'));