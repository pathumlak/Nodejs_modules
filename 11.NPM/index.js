import http from 'http';


const server =  http.createServer((req, res) => {
    res.writeHead(202, "good" , {"content-type":"text/html"})
    res.write("<h2>hii komada </h2>");
})

server.listen(8000, () => console.log("server up"))