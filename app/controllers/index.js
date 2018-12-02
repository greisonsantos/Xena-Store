module.exports.index = function(application, req, res){

	 var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	Produtos.listProductIndex(req, res);
}

module.exports.admin = function(application, req, res){
	res.render('admin/index');
}






