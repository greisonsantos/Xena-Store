// importar o modulo do crypt
var crypto = require("crypto");

function User(connection){
	this._connection = connection();
}

User.prototype.inserirUser = function(user, res){

	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){

           var senha= crypto.createHash("md5").update(user.senha).digest("hex");
           user.senha= senha;

           var confsenha= crypto.createHash("md5").update(user.confsenha).digest("hex");
           user.confsenha= confsenha;

           collection.insert(user);

		   mongoclient.close();
		});
	});

    var sucesso= 'sucesso';
    console.log(sucesso);
	res.render('admin/views/user/formAddAdmin', {validacao:{}, dadosForm: {}, sucesso:sucesso});
}

User.prototype.listUser = function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find({tipoUser: {$eq: 'admin'}}).toArray(function(err,result){

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){

              res.render('admin/views/user/listUser',{dados:result});

            }
        });
			mongoclient.close();
		});
	});

}

User.prototype.listCli = function(req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find({tipoUser: {$eq: 'cliente'}}).toArray(function(err,result){

       //se o resultado for diferente de vazio crio a sessão
       if(result[0] !=undefined){

              res.render('admin/views/user/listCli',{dados:result});
            }
        });
			mongoclient.close();
		});
	});

}


module.exports = function(){
	return User;
}