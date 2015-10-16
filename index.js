var express = require('express');
var app = express();
var path = require('path'); 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use("/static", express.static('public'));


app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index');
});

app.post('/posts/new', function(request, response){
	console.log(request.body);
	var newPost = Post.create(request.body, function(error, newPost){
		console.log(newPost)
	});
	response.json(newPost);
})

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})


var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
    	console.log("CONNECTED TO MONGO")
	});


var postSchema = mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model('Post', postSchema);


