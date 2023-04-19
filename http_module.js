const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<a href="/about"\>about</a>`)
    res.end();
  }
  else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<a href="/">back home</a>`)
    res.end();
  }
  else{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`oopss sever not found`)
  }
  
})
server.listen(5000);