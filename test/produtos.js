var express = require('../config/express')();
var request = require('supertest')(express);


describe('#ProdutosController', function () {

    it('#listagem json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });


    it('#cadastro produtos', function (done) {
        request.post('/produtos')
            .send({
                titulo: 'Comecando com Java',
                descricao: 'node, javascript e um pouco sobre http',
                preco: 100
            }).expect(302, done);
    });

    it('#update produto', function (done) {
        request.post('/produtos')
            .send({
                id: 1,
                titulo: 'Comecando com Java',
                descricao: 'node, javascript e um pouco sobre http',
                preco: 100
            })
            .expect(302, done);
    });

    it('#Delete produto', function (done) {
        request.delete('/produtos')
            .send({id:2})
            .expect(302, done);
    });

    it('#cadastro produtos dados invalidos', function (done) {
        request.post('/produtos')
            .send({
                titulo: '',
                descricao: 'node, javascript e um pouco sobre http',
                preco: 100
            })
            .expect(400, done);
    });

});