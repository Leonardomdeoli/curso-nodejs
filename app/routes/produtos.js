module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            res.format({
                html: function () {
                    res.render('produtos/lista', {
                        lista: results
                    });
                },
                json: function () {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form', {
            erros: undefined
        });
    });


    app.delete('/produtos', (req, res) => {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        var produto = req.body;
        produtosDAO.delete(produto, function (error, results) {
            res.redirect('/produtos');
        });
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;

        req.assert('titulo', 'O Titulo é obrigátorio').notEmpty();
        req.assert('preco', 'O preço é obrigátorio').isFloat();
        req.assert('descricao', 'A descricao é obrigátorio').notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.status(400).format({
                html: function () {
                    res.render('produtos/form', {
                        erros: erros,
                        produto: produto
                    });
                },
                json: function () {
                    res.json(erros);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        if (produto.id) {
            var array = [produto.titulo, produto.descricao, produto.preco, produto.id];
            produtosDAO.update(array, function (error, results, fields) {
                res.redirect('/produtos');
            });
        } else {
            produtosDAO.salva(produto, function (erros, results) {
                res.redirect('/produtos');
            });
        }
    });
}