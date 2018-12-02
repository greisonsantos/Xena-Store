// importar o modulo do crypt
var crypto = require("crypto");

function Auth(connection){
	this._connection = connection();
}

Auth.prototype.autenticar = function(usuario, req, res){


	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){

			var senha= crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha= senha;


			collection.find({email: {$eq: usuario.email}, senha: {$eq: usuario.senha}}).toArray(function(err,result){
				console.log(result);


        //se o resultado for diferente de vazio crio a sessão
        if(result[0] !=undefined){

                  req.session.autorizado = true;  //inica a sessão

                  req.session.idSession = result[0]._id;  //inica a sessão
                  req.session.email = result[0].email;  //inica a sessão
                  req.session.tipoUser = result[0].tipoUser;  //inica a sessão

              }
              console.log(req.session);

              if (req.session.autorizado){
              	res.redirect("/admin");
              }else{
              	var erro='true';
              	res.render("auth/loginUser",{validacao:{}, dadosForm:{}, erro:erro});
              }

          });
			mongoclient.close();
		});
	});

}


module.exports = function(){
	return Auth;
}