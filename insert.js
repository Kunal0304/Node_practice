const dbConnect = require('./mongodb')

const insert= async ()=>{
    let db = await dbConnect()
    // let result = await db.insert({name:"6 pro",brand:"mi",price:"1500",category:"mobile"})
    let result = await db.insert([
        {name:"4 lite",brand:"poco",price:"1500",category:"mobile"},
        {name:"ultra pro",brand:"lava",price:"1500",category:"mobile"},
        {name:"T1 max",brand:"micromax",price:"1500",category:"mobile"}
    ])


    if (result.acknowledged) {
        console.log("Data inserted Successfully")        
    }
}

insert()