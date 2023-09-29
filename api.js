const dbConnect = require('./mongodb')
const express = require('express')
const momgodb =require('mongodb')

const app =express()

app.use(express.json())

app.get("/", async (req,res)=>{
    let data = await dbConnect()
    let result = await data.find().toArray()
    res.send(result)
})

app.post("/",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.insert(req.body)
    res.send(result)
})

// *************************************************************

// app.put("/",async (req,res)=>{
//     let data =await dbConnect()
//     console.log(req.body)
//     let result = await data.updateOne(
//             {name:"6 pro"},
//             // {name:req.body.name},
//             {$set:req.body})
//         res.send(result)
//     })

//     app.listen(5000)

//************************************************************

app.put("/:name",async (req,res)=>{
    let data =await dbConnect()
    console.log(req.body)
    let result = await data.updateOne(
            {name:req.params.name},
            {$set:req.body})
        res.send(result)
    })

 

    //**********************************************************

    app.delete("/:id",async (req,res)=>{
        let data = await dbConnect()
        // let result = await data.deleteOne({_id: new momgodb.ObjectId('63490fff7a799c5933b91d')})
        let result = await data.deleteOne({_id: new momgodb.ObjectId(req.params.id)})
        res.send(result)

    })

    app.listen(5000)