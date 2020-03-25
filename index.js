var http = require("http")
var url = require("url")
var mysql = require('mysql');
var fs = require("fs")
const con = require("./connection");


var server = http.createServer(function (request, response) {
    
    var urlObject = url.parse(request.url)
    if (urlObject.pathname == '/map') 
        fs.createReadStream('maps.html').pipe(response)
        
    
        else if (urlObject.pathname == '/contact') 
        {
        fs.createReadStream('contact.html').pipe(response)
        }
         else if (urlObject.pathname == '/abouth') 
        {
        fs.createReadStream('abouth.html').pipe(response)
        }
         else 
        {
        fs.createReadStream('RECMAP.html').pipe(response)
        }
})

  
server.listen(8080)
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8080"
           +" adresinden ulaşabilirsiniz.")
           