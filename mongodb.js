const {MongoClient} = require('mongodb')
const url ='mongodb://localhost:27017'
const database = 'Demo_DB'
const client =new MongoClient(url)

async function dbConnect() {
    let result = await client.connect()
    let db = result.db(database)
    return collection =db.collection('node_tut')
}

module.exports =dbConnect;