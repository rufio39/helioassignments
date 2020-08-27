const db = require("./dal")

db.connect()
    .then(() => {

        db.insertOne()
    })
    .then(() => {

        return db.readAll()
    })
    .then(() => {

        db.updateOne()

    })
    .then(() => {

        db.deleteOne()
    })
    .then(() => {

        return db.readAll()
    })
    .then(users => {

        console.log(users)
    })
    .then(() => {

        db.close()
    })