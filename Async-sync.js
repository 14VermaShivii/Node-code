//**************sync*********************** */
const fs=require('fs')
console.log("login module")
console.log("signup module")
const file=fs.readFileSync('./Sample.txt','utf-8')
console.log(file)
console.log("forgot passwor")
console.log("reset password")

// output:login mosule
// signup module
// utilities.........................................................
// ..........
// forget 
// reset

//*************async************** */
const fs=require('fs')
console.log("login module")
console.log("signup module")
fs.readFile('./Sample.txt','utf-8',(err,file)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(file)
})
console.log("forgot passwor")
console.log("reset password")

// output:login mosule
// signup module
// forget 
// reset
// / utilities.........................................................
// ..........