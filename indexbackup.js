// console.log(10+30)

// ***********************************************************
// const fs = require('fs')
// fs.writeFileSync('Hello.txt','hello my name is kunal')

// ***********************************************************

// console.log("Hello world my name is kunal")

// const http =require('http')
// const color =require('colors')

// http.createServer((req,res)=>{
//     res.write("<h1>My Name Is Kunal Rokhle</h1>")
//     res.end()
// }).listen(4500)

// ************************************************************

// const fs = require('fs');

// const input = process.argv

// if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }
// else if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else{
//     console.log("invalid Status")
// }

//***************************************************************

// console.log(__dirname)

//***************************************************************

// const fs = require('fs')
// const path =require('path')
// const  dirPath =path.join(__dirname,'demoFiles')

// // for (let i = 0; i < 5; i++) {
    
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text")
// // }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is"+item)
//     })
// })

// ****************************************************************

// const fs = require('fs')
// const path = require('path')
// const dirname = path.join(__dirname,"CURD")

// fs.writeFileSync(dirname+"/apple.txt","this is a apple files")

// fs.readFile(dirname+"/apple.txt","utf8",(err,file)=>{
//         console.log(file)
// })

// fs.appendFile(dirname+"/apple.txt"," and now we are updated this files",(err)=>{
//     if(!err){console.log("file is updated")}
// })

// fs.rename(dirname+"/apple.txt",dirname+"/fruits.txt",(err)=>{
//     if (!err) {
//         console.log("files name is updated")
//     }
// })

// fs.unlinkSync(dirname+"/fruits.txt")

// *************************************************************************

// const expess = require('express')
// const app = expess()

// app.get('',(req,res)=>{
    
//     req.query.name ? res.send("This is first home page of expess js " + req.query.name):
//     res.send("This is first home page of expess js ")
// })

// app.get('/about',(req,res)=>{
//     res.send("This is first  About page of expess js")
// })
// app.listen(5000)

// *************************************************************************

// const expess =require('express')
// const path = require('path')

// const app= expess()

// const publicPath = path.join(__dirname,"public")

// app.use(expess.static(publicPath))

// app.listen(5000)

// *************************************************************************

// const expess =require('express')
// const path = require('path')

// const app= expess()
// app.set('view engine','ejs')

// const publicPath = path.join(__dirname,"public")

// app.get('',(req,res)=>{
//     res.sendFile(publicPath+"/index.html")
// })
// app.get('/profile',(req,res)=>{
//     const user ={
//         name:"kunal",
//         age:24,
//         email:"kunal@test.com"
//     }

//     res.render("profile", {user})
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(publicPath+"/about.html")
// })
// app.get('/help',(req,res)=>{
//     res.sendFile(publicPath+"/help.html")
// })
// app.get('*',(req,res)=>{
//     res.sendFile(publicPath+"/nopage.html")
// })

// app.listen(5000)

// ************************************************************

// application level middleWare

// const express = require('express')
// const app= express()

// const func =(req,res,next)=>{
//     if(!req.query.age){
//         res.send("please give age")
//     }
//     if(req.query.age < 18){
//         res.send("you not able to open this page")
//     }else{
//         next()
//     }
// }

// app.use(func)

// app.get('',(req,res)=>{
//     res.send("my name is kunal this is a home page")
// })
// app.get('/about',(req,res)=>{
//     res.send("my name is kunal this is a about page")
// })
//  app.listen(5000)

// *************************************************************


// group route middleware

// const express = require('express')
// const app= express()

// const route = express.Router()


// const func =(req,res,next)=>{
//     if(!req.query.age){
//         res.send("please give age")
//     }
//     if(req.query.age < 18){
//         res.send("you not able to open this page")
//     }else{
//         next()
//     }
// }

// route.use(func)

// app.get('',(req,res)=>{
//     res.send("my name is kunal this is a home page")
// })
// app.get('/about',(req,res)=>{
//     res.send("my name is kunal this is a about page")
// })
// route.get('/contact',(req,res)=>{
//     res.send("my name is kunal this is a contact page")
// })
// route.get('/gallary',(req,res)=>{
//     res.send("my name is kunal this is a gallary page")
// })

// app.use("/", route)
//  app.listen(5000)

// ***************************************************************



