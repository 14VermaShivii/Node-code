// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log("client request  ",req)          ///client reaqest =at the server
    
//     //response the client
//     res.end("welcome to home")         ///welcome to home =at the server
// })
// server.listen(8000,()=>{
//     console.log("server started")
// })
// output: server started

//*****************home page********************** */
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==="/"||req.url==="home"){
        res.end("<h1>you are on home page</h1>")
    }
   else if(req.url==="/about"){
        res.end("<h1>about page</h1>")
    }
    else if(req.url==="/contact"){
        res.end("<h1>contact page</h1>")
    }
    else{
      res.end("<h1>page not found</h1>")
    }
})
server.listen(8000,()=>{
    console.log("server started")
})


//output = will be on the sever ,there will be  creat home page,about page and contact page
//************************ */
