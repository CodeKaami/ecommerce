const Errorhandler = require("../utils/errorhandlers")

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server errro";

    res.status(err.statusCode).json({
        success: false,
        error: err,

        message: err.message,

        // ############ I also use this line of code for some more details ############ 
        // error:err.stack,


    });
}