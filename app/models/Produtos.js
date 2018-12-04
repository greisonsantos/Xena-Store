
function Produtos(connection){
	this._connection = connection();
}

Produtos.prototype.inserirProdutos = function(produto){
	console.log(produto);
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.insert(produto);

			mongoclient.close();
		});
	});
}


//model para recuperar os produtos para editar
Produtos.prototype.list = function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find().toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){

              res.render('admin/views/estoque/listProduct',{dados:result});

            }
        });
			mongoclient.close();
		});
	});

}

// model que recupera os produtos para index do site
Produtos.prototype.listProductIndex = function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find().toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){

              res.render('cliente/index',{dados:result});

            }
        });
			mongoclient.close();
		});
	});

}

//recupera as camisas

Produtos.prototype.getCamisas = function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find({category:{$eq:"Camisas"}}).toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){
              res.render('cliente/camisas',{dados:result});

            }else{
            	 res.render('cliente/camisas',{dados:result});
            }
        });
			mongoclient.close();
		});
	});

}

Produtos.prototype.getMoletons= function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find({category:{$eq:"Moletons"}}).toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){
              res.render('cliente/camisas',{dados:result});

         }else{
         	 res.render('cliente/camisas',{dados:result});
         }
        });
			mongoclient.close();
		});
	});

}

Produtos.prototype.getPosters= function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find({category:{$eq:"Posters"}}).toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){
              res.render('cliente/posters',{dados:result});

         }else{
         	 res.render('cliente/posters',{dados:result});
         }
        });
			mongoclient.close();
		});
	});

}
Produtos.prototype.getAcessorios= function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find({category:{$eq:"Acessorios"}}).toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){
              res.render('cliente/acessorios',{dados:result});

         }else{
         	 res.render('cliente/acessorios',{dados:result});
         }
        });
			mongoclient.close();
		});
	});

}

Produtos.prototype.editProduct= function(req, res, id){
	console.log(id);
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("produtos", function(err, collection){
			collection.find().toArray(function(err,result){
				console.log(result);

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){
       	console.log("passou");
              res.render('admin/views/estoque/editProducts',{validacao:{}, dadosForm:{}, result:result});

         }else{
         	  res.render('admin/views/estoque/editProduct',{validacao:{}, dadosForm:{},result:result});
         }
        });
			mongoclient.close();
		});
	});

}

module.exports = function(){
	return Produtos;
}