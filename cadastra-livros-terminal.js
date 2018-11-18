var http = require('http');

var configuracao = {
    hostname:'localhost',
    port:3000,
    path:'/produtos',
    method:'post',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var cliente = http.request(configuracao, function (res) {
   console.log(res.statusCode);
   res.on('data',function(body){
       console.log("copor:" + body);
   });
});

var produto = {
    id:1,
    titulo:'Comecando com Java',
    descricao:'node, javascript e um pouco sobre http',
    preco:100
};

cliente.end(JSON.stringify(produto));