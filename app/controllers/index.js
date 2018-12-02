module.exports.index = function(application, req, res){

	 var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	Produtos.listProductIndex(req, res);
}

module.exports.admin = function(application, req, res){
	if (req.session.autorizado){
              res.render('admin/index');
	}else{
		res.send("e necesario fazer login");
	}
}






