var bodyparser= require('body-parser');
var mongoose= require('mongoose');

mongoose.connect("mongodb+srv://test:test@cluster1-yqvgd.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });
//schema 
var TdoSchema= new mongoose.Schema({
  item:String 
});

//model
var ToDoModel=mongoose.model('ToDo',TdoSchema);//the model name is ToDo
/*var item1 = ToDoModel({item :'walk'}).save(function(err){
  if (err) throw err;
  console.log('done');
})*/
var codedparser =bodyparser.urlencoded({extended: false});

module.exports=function(app){
app.get('/todo',function(req,res){
  ToDoModel.find({},function(err,data){
    if (err)
    throw err;
    res.render('todo',{todos: data});
    //console.log("get it");
  });
 
});


app.post('/todo',codedparser,function(req,res){
  var New_ToDo_Model=ToDoModel(req.body).save(function(err,data){
    if (err) throw err;
    res.json(data);
    //console.log("post it");
  })
});

app.delete('/todo/:item',function(req,res){
 ToDoModel.find({item:req.params.item.replace(/\-/g,"")}).remove(function(err,data){
   if (err) throw err;
   res.json(data);
  // console.log("delete it");
 });
});


};