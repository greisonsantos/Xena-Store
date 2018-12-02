
module.exports.cadastroUser = function(application, req, res){


	var dadosForm = req.body;
	console.log(dadosForm);

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('email', 'Usuário não pode ser vazio').notEmpty();
	req.assert('telefone', 'Senha não pode ser vazio').notEmpty();
	req.assert('cidade', 'Casa não pode ser vazio').notEmpty();
	req.assert('estado', 'Casa não pode ser vazio').notEmpty();
	req.assert('cep', 'Casa não pode ser vazio').notEmpty();
	req.assert('bairro', 'Casa não pode ser vazio').notEmpty();
	req.assert('rua', 'Casa não pode ser vazio').notEmpty();
	req.assert('numero', 'Casa não pode ser vazio').notEmpty();
	req.assert('senha', 'Casa não pode ser vazio').notEmpty();
	req.assert('confsenha', 'Casa não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('auth/cadastroUser', {validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var User = new application.app.models.User(connection);

	User.inserirUser(dadosForm);

	res.send('user cadastrado');
}


