const dbConnect = require("./mongodb")

const deleteData = async ()=>{
    let data = await dbConnect()
    // let result = await data.deleteOne({name:"ultra pro"})
    let result = await data.deleteMany({price:"2200"})

    console.log(result)

} 
deleteData()