const http = require ('http');

const fs = require("fs");

const app = http.createServer(function (request, response){
    fs.readFile("./prueba.html", "utf-8", function(err,text){
        response.write(text);
        response.end();
    });
});

app.listen(8080,function(){
  console.log('>Servidor escuchando el puerto 8080');
});
