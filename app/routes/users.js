module.exports = function(application){


	application.get('/camisas', function(req, res){
		application.app.controllers.produto.camisas(application, req, res);
	});

}