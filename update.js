const dbConnect = require("./mongodb")

const update= async ()=>{
    let data =await dbConnect()
    let result =await data.update({price:"1500"},{$set:{price:"2200"}})

    if (result.acknowledged) {
        console.log("update data successfully")        
    }
}

update()