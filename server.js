var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    todos = [],
    nextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hi my TODO app');
});

app.get('/todos', function(req, res) {
    res.json(todos);
});

app.get('/todos/:id', function(req, res) {
    var todoId = parseInt(req.params.id);
    var flag = 0,
        i = 0;
    while (i < todos.length) {
        if (todos[i].id === todoId) {
            flag = 1;
            res.json(todos[i]);
        }
        i++;
    }
    if (flag == 0) {
        res.status(404).send();
    }
});

app.post('/todos', function(req, res) {
    var body = req.body;
    body.id = nextId;
    nextId++;
    todos.push(body);
    res.json(body);
});

app.listen(port, function() {
    console.log('Todo application running on server ' + port);
});
