module.exports.cadastrar = function (application, req, res){
	res.render("auth/cadastroUser",{validacao:{}, dadosForm:{},sucesso:{}});
}

module.exports.login = function (application, req, res){
	res.render("auth/loginUser", {validacao:{}, dadosForm:{}, erro:{}});
}


module.exports.loginUser = function (application, req, res){

    var dadosForm= req.body;
    req.assert('email', 'Preenha o campo email ').notEmpty();
	req.assert('senha', 'Preencha o campo senha').notEmpty();

    var erros = req.validationErrors();

	if(erros){
        res.render("auth/loginUser", {validacao:erros, dadosForm:dadosForm, erro:{}});
		return;
	}

    var connection = application.config.dbConnection;
	var Auth = new application.app.models.Auth(connection);

	Auth.autenticar(dadosForm,req, res);

}


module.exports.sair = function (application, req, res){

   req.session.destroy( function(err){
        res.render("auth/loginUser", {validacao:{}, dadosForm:{}, erro:{}});
   });


}
