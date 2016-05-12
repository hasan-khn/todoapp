var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
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
    var matchedTodo = _.findWhere(todos, { id: todoId });
    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});

app.post('/todos', function(req, res) {
    var body = req.body;
    var pickeValues = _.pick(body, 'description', 'completed');
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
        return res.status(404).send();
    }
    pickeValues.description = pickeValues.description.trim();
    pickeValues.id = nextId++;
    todos.push(pickeValues);
    res.json(pickeValues);
});

app.listen(port, function() {
    console.log('Todo application running on server ' + port);
});
