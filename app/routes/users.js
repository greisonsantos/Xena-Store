module.exports = function(application){

	application.post('/cadastroUser', function(req, res){
		application.app.controllers.user.cadastroUser(application, req, res);
	});

}