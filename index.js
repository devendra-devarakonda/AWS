import express from 'express';
const app = express();

const port = 8000;

app.listen(port,()=>{
    console.log("App is listening at port number ",port);
})

app.get('/',(req,res)=>{
    res.send("msg:this is home page number 1")
})