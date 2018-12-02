module.exports = function(application){
	application.get('/cadastroUser', function(req, res){
		application.app.controllers.auth.cadastrar(application, req, res);
});

	application.get('/loginUser', function(req, res){
		application.app.controllers.auth.login(application, req, res);
});

}
