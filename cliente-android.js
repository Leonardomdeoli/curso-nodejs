var http = require('http');

var configuracao = {
    hostname:'localhost',
    port:3000,
    path:'/produtos',
    headers:{
        'Accept':'application/json'
    }
};


http.get(configuracao, function (res) {
   console.log(res.statusCode);
   
   res.on('data',function(body){
       console.log("copor:" + body);
   });
});