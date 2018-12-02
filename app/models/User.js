function User(connection){
	this._connection = connection();
}

User.prototype.inserirUser = function(user){

	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(user);

			mongoclient.close();
		});
	});
}

module.exports = function(){
	return User;
}