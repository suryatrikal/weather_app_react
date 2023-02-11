const express=require("express");
const path=require("path");
const app=express();
const hbs=require('hbs');
// console.log();
// this is for hosting purpose that when we host website then it should follow 
// either the port given by hosting website or by local 8000 or whaterver you specified

const port=process.env.PORT||8000;
const static_web_path=path.join(__dirname,"../templates/views");
app.set('view engine', 'hbs');
app.set('views', static_web_path);
const x=path.join(__dirname,'../public');
console.log(x);
const x1=path.join(__dirname,'../public/css');
const partials_path=path.join(__dirname,'../templates/partials');
// console.log(partials_path);
// // app.set(x);
// console.log(  static_web_path );
app.use(express.static(x));
app.use(express.static(x1));
app.use(express.static(static_web_path));
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
res.render("home");
});



app.get("/about",(req,res)=>{
res.render("about")
});
app.get("/weather",(req,res)=>{
res.render("weather");
});
app.get("*",(req,res)=>{
res.render("error");
});



app.listen(port,()=>{
    console.log(`server is listening at port no ${port}`);
});