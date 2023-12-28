const fs =require('fs')
fs.writeFileSync('./text.txt',"welcome ")
fs.appendFileSync('./text.txt',` how r u \n`)
//*******************test file ******************* */
fs.stat('./test.txt',(err,stats)=>{
    if(err){
        console.log(err,"error")
        return;
    }
    if(stats.isFile()){
        console.log(' File is available')
    }else{
    console.log(' no files ')
    }
});
//*****************----------directory read-----------******************* */
fs.stat('./node_modules',(err,stats)=>{
if(err){
    console.error(err,"error")
    return;
}
if(stats.isDirectory()){
    console.log('directory available')
}else{
    console.log('no file')
}
});

//******************----file generate---******************* */
fs.stat('./text.txt',(err,stats) => {
    if(err){
        console.log(err)
        return;
    }
    if(stats.isFile()){
        console.log("file size is",stats)

    }
    else{
        console.log("no file")
    }
    
});
//************file read***************** */
fs.readdir('./',(err,Files)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("files in directory",Files)
});

//*********************copy file***************** */
fs.copyFile('./text.txt',"./copy.txt",(err)=>{
    if(err){
        console.error(err)
        return

    }
    console.log("file copied")
    const f = fs.readFileSync('./copy.txt','utf-8')  //copy file read
    console.log(f)
});

//*************delete file*********** */
fs.unlink('./copy.txt',(err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("file delete")
})
