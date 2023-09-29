// const {MongoClient} = require('mongodb')
// const url ='mongodb://localhost:27017'
// const database = 'Demo_DB'
// const client =new MongoClient(url)

// async function getData() {
//     let result = await client.connect()
//     let db = result.db(database)
//     let collection =db.collection('node_tut')
//     let response = await collection.find({}).toArray()
//     console.log(response)

// }

// getData()


// ******************************************************************

// const {MongoClient} = require('mongodb')
// const url ='mongodb://localhost:27017'
// const database = 'Demo_DB'
// const client =new MongoClient(url)

// async function dbConnect() {
//     let result = await client.connect()
//     let db = result.db(database)
//     return collection =db.collection('node_tut')
// }



// const main = async() =>{
// let data =await dbConnect()
// data =await data.find().toArray()
// console.log(data)
// }

// main()

// *******************************************************

// const dbConnect =require("./mongodb")

// const main = async() =>{
// let data =await dbConnect()
// data =await data.find().toArray()
// console.log(data)
// }

// main()

// ************************************************************

// const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/Demo_DB")

// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// })

// const saveInDB = async () => {

//     const ProductModel = mongoose.model('node_tut', ProductSchema)
//     let data = new ProductModel({ name: "reno pro", price: "1900", brand: "oppo", category: "mobile" })
//     let result = await data.save();
//     console.log(result)

// }

// // saveInDB()

// const updateInDB = async () => {
//     const ProductModel = mongoose.model('node_tut', ProductSchema)
//     let data = await ProductModel.updateOne({ brand: "sumsung" }, { $set: { brand: "realme" } })
//     console.log(data)
// }

// // updateInDB()

// const deleteInDB = async () => {
//     const ProductModel = mongoose.model('node_tut', ProductSchema)
//     let data = await ProductModel.deleteOne({ brand: "realme" })
//     console.log(data)
// }

// // deleteInDB()

// const findInDB = async () => {
//     const ProductModel = mongoose.model('node_tut', ProductSchema)
//     let data = await ProductModel.find()
//     console.log(data)
// }

// // findInDB()

// ***********************************************************************


