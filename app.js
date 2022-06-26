if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connecDB = require('./db/connect')
const connectDB = require('./db/connect')

//middleware
app.use(express.json())

//routes
app.get('/hello',(req,res)=> {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks',tasks)


const port = 3000
const start = async()=>{
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()