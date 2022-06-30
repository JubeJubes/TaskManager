const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema ({
    name: {
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20, 'name cannot be more than charracters']   
    },
    completed:{
     type:Boolean,
     default: false   
    },
})

module.exports = mongoose.model('Task',TaskSchema) 