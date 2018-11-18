function ProdutosDAO(connection){
   this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

ProdutosDAO.prototype.update = function (produto, callback) {
    this._connection.query('update produtos set titulo = ? , descricao = ?, preco = ? where id = ?', produto, callback);
}

ProdutosDAO.prototype.delete = function (produto, callback) {
    this._connection.query('delete from produtos where id = ' +  produto.id, callback);
}

module.exports = function () {
    return ProdutosDAO;
}