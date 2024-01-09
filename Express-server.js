const http=require('http')
const express=require ('express')
const fs=require('fs')
const app=express();
const users=require('./MOCK_DATA.json')

//use this middleware
// app.use(express.urlencoded())    
app.use(express.json())

app.get('/',(req,res)=>{
    return res.end(`Home page ${req.query.name}`)
})
  

//get all user data
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

//get/update/delete user data by id
app.route("/api/user/:id").get((req,res)=>{
    const id=parseInt(req.params.id);
    const user =users.find((user)=> user.id===id);
    return res.send(user);
}).patch((req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(el=>el.id===id)
    if(!user){
        return res.status(404).json({
            status:"fail",
            message:"invalid uder ID"
        })
    }
    const i=users.indexOf(user)
    Object.assign(user,req.body)
    users[i]=user
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json({
            status:'success',
        })
    })
}).delete((req,res)=>{
    let id=parseInt(req.params.id);
    const user= users.find((user)=>user.id===id);
    const d=users.indexOf(user)
    users.splice(d,1)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",message:"user deleted successdully"});
    })
})


//post data
app.post("/api/users",(req,res)=>{
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length});
    })
})

//create server
const server=http.createServer(app)
server.listen(8000,()=>{
    console.log("server started")
})