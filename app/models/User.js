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

module.exports = function(){
	return User;
}