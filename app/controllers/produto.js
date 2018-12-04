
module.exports.menuProduto = function(application, req, res){
	res.render('admin/views/estoque/home_estoque');
}


module.exports.camisas = function (application, req, res){

     var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	 Produtos.getCamisas(req, res);

}



module.exports.moletons = function (application, req, res){

	 var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	 Produtos.getMoletons(req, res);
}

module.exports.posters = function (application, req, res){
	 
	 var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	 Produtos.getPosters(req, res);
}

module.exports.acessorios = function (application, req, res){

	 var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	 Produtos.getAcessorios(req, res);
}


module.exports.cadastro = function (application, req, res){
	res.render('admin/views/estoque/add_produtos',{validacao:{}, dadosForm:{}});
}

module.exports.inserir = function (application, req, res){

  var dadosForm = req.body;

	req.assert('name_product', 'Nome do produto não pode ser nulo').notEmpty();
	req.assert('category', 'Categoria não pode ser vazio').notEmpty();
	req.assert('tema', 'Tema não pode ser vazio').notEmpty();
	req.assert('quantidade', 'Quantidade não pode ser vazio').notEmpty();
	req.assert('valor', 'Valor não pode ser vazio').notEmpty();
	req.assert('sexo', 'Sexo não pode ser vazio').notEmpty();
	req.assert('descricao', 'Descrição não pode ser vazio').notEmpty();
	req.assert('imagem', 'Imagem não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('admin/views/estoque/add_produtos', {validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var Produtos = new application.app.models.Produtos(connection);

	Produtos.inserirProdutos(dadosForm);

  res.render('admin/views/estoque/add_produtos',{validacao:{}, dadosForm:{}, insert:{}});
}

module.exports.list = function (application, req, res){

     var connection = application.config.dbConnection;
	 var Produtos = new application.app.models.Produtos(connection);

	Produtos.list(req, res);

}


module.exports.edit = function (application, req, res){
    
	res.render('admin/views/estoque/editProduct',{validacao:{}, dadosForm:{}});
}
