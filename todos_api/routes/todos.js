var express=require('express');
var router=express.Router();
var db=require("../models");

router.get("/",function(req,res)
{
	db.Todo.find()
	.then(function(todos)
	{
		res.json(todos);
	})
	.catch(function(err)
	{
		res.send(err);
	});
});

router.post("/",function(req,res)
{
	db.Todo.create(req.body)
	.then(function(newTodos){
		res.json(newTodos);
	})
	.catch(function(err){
		res.send(err);
	});
});

router.get("/:todosId",function(req,res)
{
	db.Todo.findById(req.params.todosId)
	.then(function(foundTodo){
		res.json(foundTodo);
	})
	.catch(function(err){
		res.send(err);
	});
});

router.put("/:todosId",function(req,res)
{
	db.Todo.findOneAndUpdate({_id:req.params.todosId},req.body,{new:true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	});
});

router.delete("/:todosId",function(req,res)
{
	db.Todo.remove({_id:req.params.todosId})
	.then(function(){
		res.json({message:"Deleted todo"});
	})
	.catch(function(err){
		res.send(err);
	});
});

module.exports=router;