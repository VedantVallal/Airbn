// Modules 
const express = require("express");

// App 
const app = express();

// Router 
const route = require("./Routes/AllRoutes");

// EJS 
app.set('view engine','ejs');
app.set('views','views');

// Dynamic Data Body
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Main Code 
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(route);


// App Listen 
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})