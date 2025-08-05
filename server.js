const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello KMADS!');
    // res.end();
    let path= './';

    switch(req.url){
        case '/':
            path+= 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+= 'about.html';
            res.statusCode=200;
            break;
        case '/about-us':
            res.statusCode=302;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            res.statusCode=404;
            path+= '404.html';
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(1973, 'localhost', ()=>{
    console.log('Listening for request on port 1973');
})