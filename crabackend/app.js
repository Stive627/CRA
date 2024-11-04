const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./DB/db')
const userRouter = require('./Routes/user')
const carRouter = require('./Routes/car')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static('public'))

const port = process.env.PORT || 3001
const localhost = '127.0.0.1'
app.use('/user', userRouter)
app.use('/car', carRouter)

db.connect()
.then(()=>{
    console.log('Connected to the database.')
})
.catch((error) => console.log('Something was wrong while trying to get connected to the database\n', error))

app.listen(port, localhost, function(){
    console.log(`The server is running at http://${localhost}:${port}`)
})