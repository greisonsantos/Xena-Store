module.exports = function(application){
	application.get('/cadastroUser', function(req, res){
		application.app.controllers.auth.cadastrar(application, req, res);
});

	application.get('/loginUser', function(req, res){
		application.app.controllers.auth.login(application, req, res);
    });

    application.get('/sair', function(req, res){
    	 if(req.session.autorizado){
		application.app.controllers.auth.sair(application, req, res);
	}else{
		res.send("rota não encontrada");
	}
});

}
