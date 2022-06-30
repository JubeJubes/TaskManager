const customError = require('../customError/customError')
const errorHandler = (err,req,res,next) => {
    if (err instanceof customError) {
        return res.status(err.status).json({msg:err.message})
    }
    return res.status(500).json({msg:'Something went wrong. Please try again'})
}

module.exports = errorHandler