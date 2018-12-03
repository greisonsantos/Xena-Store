
module.exports.cadastroUser = function(application, req, res){


	var dadosForm = req.body;


	req.assert('nome', 'nome não pode ser vazio').notEmpty();
	req.assert('email', 'email invalido').isEmail();
	req.assert('telefone', 'telefone não pode ser vazio').notEmpty();
	req.assert('cidade', 'cidade não pode ser vazio').notEmpty();
	req.assert('estado', 'estado não pode ser vazio').notEmpty();
	req.assert('cep', 'cep não pode ser vazio').notEmpty();
	req.assert('bairro', 'bairro não pode ser vazio').notEmpty();
	req.assert('rua', 'rua não pode ser vazio').notEmpty();
	req.assert('numero', 'numero não pode ser vazio').notEmpty();
	req.assert('senha', 'Insira uma senha de no mínimo 8 caracteres').len(8,32);
	req.assert('confsenha', 'As senhas não são compatíveis').equals(dadosForm.senha);

	var erros = req.validationErrors();

	if(erros){
		res.render('auth/cadastroUser', {validacao: erros, dadosForm: dadosForm, sucesso:{}});
		return;
	}

	var connection = application.config.dbConnection;
	var User = new application.app.models.User(connection);

	User.inserirUser(dadosForm, res);
}

module.exports.homeUsuarios = function (application, req, res){
	res.render('admin/views/user/home_user');
}

module.exports.formAddAdmin = function (application, req, res){
	res.render('admin/views/user/formAddAdmin',{validacao: {}, dadosForm:{}, sucesso:{}});
}


module.exports.addAdmin = function(application, req, res){


	var dadosForm = req.body;


	req.assert('nome', 'nome não pode ser vazio').notEmpty();
	req.assert('email', 'email invalido').isEmail();
	req.assert('telefone', 'telefone não pode ser vazio').notEmpty();
	req.assert('cpf', 'cpf não pode ser vazio').notEmpty();
	req.assert('senha', 'Insira uma senha de no mínimo 8 caracteres').len(8,32);
	req.assert('confsenha', 'As senhas não são compatíveis').equals(dadosForm.senha);

	var erros = req.validationErrors();

	if(erros){
		res.render('admin/views/user/formAddAdmin',{validacao: erros, dadosForm: dadosForm, sucesso:{}});
		return;
	}

	var connection = application.config.dbConnection;
	var User = new application.app.models.User(connection);

	User.inserirUser(dadosForm, res);
}