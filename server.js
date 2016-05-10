var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

	app.get('/',function(req,res){
		res.send('Hi my TODO app');
	});

	app.listen(port,function(){
		console.log('Todo application running on server '+port);
	})