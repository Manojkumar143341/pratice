const express = require('express')
const app = express()
const PORT = 3500
const path = require('path')
const router = express.Router()
app.set('view engine', 'pug')

router.all('/rout',(req,res)=>{
    console.log('i am going')
    res.send('i am coming')
    res.end()
})
router.all('/route',(req,res)=>{
    console.log('i am friend')
    res.send('i am enemy')
    res.end()
})
app.get('/files',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.use(router)
app.get("/server", (req, res) => {
    res.send(`<div><h2>this is me</h2><h5>i am going</h5></div>`);
});
app.get('/users',(req,res)=>{
    console.log('Request URL:', req.url);
    console.log('i am manoj')
    res.send('i am manoj')
})
app.use((req,res)=>{
   console.log('i am programmer')
})

app.listen(PORT,()=>console.log('hi'))