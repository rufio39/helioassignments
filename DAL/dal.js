require('dotenv').config()

const { MongoClient, Cursor } = require("mongodb");
let client
let usersCollection
// added code for connecting to the mongodb database for helio/users
function connect() {

    const uri = `mongodb+srv://dbrufio:${process.env.DB_PASSWORD}@cluster0.zzn5p.mongodb.net/Helio?retryWrites=true&w=majority`

    client = new MongoClient(uri, { useUnifiedTopology: true });

    return client.connect()
        .then(() => {
            console.log("connected to server")

            return client.db("Helio").collection("users");
        })
        .then(collection => {
            usersCollection = collection
        })
        .catch((err) => {
            console.log(err)
        })

}
function insertOne() {
    
    return usersCollection.insertOne({
        fName:"Tristan",
        lName:"Tires",
        age:28
    })
}

function readAll() {

    let rtnValue = usersCollection.find({}).toArray()

    return rtnValue

}

function updateOne() {
    usersCollection.findOneAndReplace({lName: { $eq: "Boy"}},{
        lName: "did this work?"
    })
}
function deleteOne() {
    usersCollection.findOneAndDelete({fName:{ $eq: "wheeler"}})
}

function close() {
    client.close()
}

module.exports.connect = connect
module.exports.insertOne = insertOne
module.exports.readAll = readAll
module.exports.updateOne = updateOne
module.exports.deleteOne = deleteOne
module.exports.close = close