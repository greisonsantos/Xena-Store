module.exports = function(application){

     application.get('/menu-produto', function(req, res){
	    application.app.controllers.produto.menuProduto(application, req, res);
	});

	application.get('/camisas', function(req, res){
		application.app.controllers.produto.camisas(application, req, res);
	});

	application.get('/moletons', function(req, res){
		application.app.controllers.produto.moletons(application, req, res);
	});

	application.get('/posters', function(req, res){
		application.app.controllers.produto.posters(application, req, res);
	});


	application.get('/acessorios', function(req, res){
		application.app.controllers.produto.acessorios(application, req, res);
	});

   //route crude de produtos
	application.get('/cadastroProduto', function(req, res){
		if(req.session.tipoUser=='cliente'){ 
		     application.app.controllers.produto.cadastro(application, req, res);
	   }else{
             res.render("notfound");
	   }
	});

	application.post('/inserirProduto', function(req, res){
		if(req.session.tipoUser=='cliente'){ 
		     application.app.controllers.produto.inserir(application, req, res);
		}else{
             res.render("notfound");
	    }
	});

	application.get('/listProduct', function(req, res){
		if(req.session.tipoUser=='cliente'){ 
		     application.app.controllers.produto.list(application, req, res);
		}else{
             res.render("notfound");
	    }
	});

    application.get('/edit', function(req, res){
    	if(req.session.tipoUser=='cliente'){ 
		     application.app.controllers.produto.edit(application, req, res);
		}else{
             res.render("notfound");
        }
	});

}
