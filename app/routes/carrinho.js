module.exports = function(application){
	application.get('/carrinho', function(req, res){
		application.app.controllers.carrinho.index(application, req, res);
	});

}