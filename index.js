import express from 'express'
const app = express();

const port = 8000;

app.listen(port,()=>{
    console.log("App is listening at port number ",port);
})

app.get('/',(req,res)=>{
    const ip = req.ip;
    res.send(`msg:this is home page number 1 and ip address is ${ip}`)
})

app.get('/test1',(req,res)=>{
    const ip = req.ip;
    res.send(`msg:this is test 1 Target Groups and ip address is ${ip}`)
})

app.get('/test2',(req,res)=>{
    const ip = req.ip;
    res.send(`msg:this is test 2 Target group and ip address is ${ip}`)
})