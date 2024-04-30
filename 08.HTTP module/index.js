import http from 'http';

const server = http.createServer((req, res) => {
    // res.setHeader("content-type", "text/html");
    // res.statusCode = 404;
    // res.statusMessage = "BAD";



    res.writeHead(202, "good" , {"content-type":"text/html"})

    res.write("<h1>hello world ! </h1>")

})

server.listen(8000, () => console.log("server up!"));