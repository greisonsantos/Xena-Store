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

//recebe os dados do form do user e compara com os dados do db
// UsuariosDAO.prototype.autenticar = function(usuario, req, res){
//   this._connection.open( function(err, mongoclient){
// 		mongoclient.collection("usuarios", function(err, collection){
// 			collection.find(usuario).toArray(function(err,result){
// 				console.log(result);

//        //se o resultado for diferente de vazio crio a sessão
//                if(result[0] !=undefined){

//                   req.session.autorizado = true;  //inica a sessão

//                   req.session.usuario = result[0].usuario;  //inica a sessão
//                   req.session.casa = result[0].casa;  //inica a sessão

//                }
//                if (req.session.autorizado){
//                     res.redirect("jogo");
//                }else{
//                	  res.render("index",{validacao:{}});
//                }
// 			// ou assim  collection.find(usuario);

// 		});
// 		mongoclient.close();
// 	});
// 		});

// }

module.exports = function(){
	return Produtos;
}