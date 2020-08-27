<<<<<<< HEAD
const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello cruel World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
=======
const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello cruel World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
>>>>>>> a4ead6a0b24bd255422bffc1a48a8dbfabc67dab
