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

}