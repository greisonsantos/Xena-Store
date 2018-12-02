module.exports = function(application){
	application.get('/contato', function(req, res){
		application.app.controllers.contato.index(application, req, res);
	});

}