module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

    application.get('/admin', function(req, res){
    	 if(req.session.autorizado){
		application.app.controllers.index.admin(application, req, res);
	}else{
		res.render("notfound");
	}
	});

	application.post('/autenticar', function(req, res){
	    application.app.controllers.index.autenticar(application, req, res);
	});

}