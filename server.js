var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
todos = [{
    id: 1,
    description: "Mom meeting",
    completed: false
}, {
    id: 2,
    description: "Swimming",
    completed: false
}, {
    id: 3,
    description: "Call Dad",
    completed: true
}]
app.get('/', function(req, res) {
    res.send('Hi my TODO app');
});
app.get('/todos', function(req, res) {
    res.json(todos);
});
app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id);
	var flag = 0,
	i=0;
	while(i<todos.length){
		if(todos[i].id === todoId){
			flag=1;
			res.json(todos[i]);
		}
		i++;
	}
	if(flag==0){
		res.status(404).send();
	}
})
app.listen(port, function() {
    console.log('Todo application running on server ' + port);
})
