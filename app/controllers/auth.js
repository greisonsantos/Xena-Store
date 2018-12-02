module.exports.cadastrar = function (application, req, res){
	res.render("auth/cadastroUser");
}


module.exports.login = function (application, req, res){
	res.render("auth/loginUser");
}
