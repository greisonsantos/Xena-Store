module.exports = function(application){

	application.post('/cadastroUser', function(req, res){
		application.app.controllers.user.cadastroUser(application, req, res);
	});

    application.get('/loginUser', function(req, res){
		application.app.controllers.auth.loginUser(application, req, res);
	});

	application.post('/loginUser', function(req, res){
		application.app.controllers.auth.loginUser(application, req, res);
	});

    application.get('/home_usuarios', function(req, res){
		application.app.controllers.user.homeUsuarios(application, req, res);
	});

	application.get('/formAddAdmin', function(req, res){
		application.app.controllers.user.formAddAdmin(application, req, res);
	});

	application.post('/addAdmin', function(req, res){
		application.app.controllers.user.addAdmin(application, req, res);
	});

}