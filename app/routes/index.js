module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

    application.get('/admin', function(req, res){
	    application.app.controllers.index.admin(application, req, res);
	});

  
	application.post('/autenticar', function(req, res){
	    application.app.controllers.index.autenticar(application, req, res);
	});

}