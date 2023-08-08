
const http = require('http');

const server = http.createServer((req, res) => {//!Aquí capturamos la request y la response
    //?Req => Todo lo que se está solicitando del lado del cliente (el cliente le pregunta al server)
    //? Res => Lo que se envía ante la resolución de la req (el server le dice al cliente )
    
   /*  res.setHeader("Content-Disposition","attachment; filename=lista.csv")
    res.writeHead(200,{'Content-type':'application/csv'})
    res.write("Hola mundo desde el server http \n");
    res.write("Hola mundo desde el server http \n"); */
    res.write("Hola mundo desde el server http \n");
    res.end();//! Se puede hacer una cantidad de cosas pero con eso finalizamos todo ya que se queda esperando...
})
server.listen(8080)
    //.listen(8080);
console.log("Server listening in port: 8080")