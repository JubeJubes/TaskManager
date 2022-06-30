if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connecDB = require('./db/connect')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 3000
const start = async()=>{
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()