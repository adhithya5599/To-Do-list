var mongoose=require('mongoose');
const options={
	 useUnifiedTopology: true, 
	 useNewUrlParser: true 
};

mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/todo-api",options);
mongoose.Promise=Promise;

module.exports.Todo=require("./todo");