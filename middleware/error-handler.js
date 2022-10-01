

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log('ERROR CATCHER')
    let customError = {
        status: err.status || 500,
        message: err.message || 'Something went wrong, Try again later'
    }

    if(err.name === 'ValidationError') {
        customError.status = 400
        customError.message = Object.values(err.errors).map(item => {
            return item.message
        }).join(', ');
    }
    console.log(customError.message);
    res.status(400).json({status: customError.status, message: customError.message})
}

module.exports = errorHandlerMiddleware;