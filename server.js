const http = require('http');
const op = require("./operaciones");

var server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end("Hola desarrollador");
    
});
//console.log(" el resultado de la suma es: ", op.suma(3, 5));
console.log("mi nombre es: ", op.getNombre());

server.listen(8080);