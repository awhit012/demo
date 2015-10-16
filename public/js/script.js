$(document).ready(function(){
	var app = new Blog();
	app.addEventListener();
})

function Blog(){
	this.$button = $('#button');
	this.$form = $('#form');
}

Blog.prototype.addEventListener = function(){
	console.log(this.$button);
	blog = this;
	this.$button.on('click', function(event){
		event.preventDefault();
		blog.submitPost(blog.$form);
	});
};

Blog.prototype.submitPost = function(form){
	var url = "/posts/new";
	$.ajax({
		url: url,
		type: 'POST',
		data: form.serialize()
	});
};