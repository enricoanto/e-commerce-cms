const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'Unauthorized':
            res.status(401).json({
                name: 'Unauthorized',
                message: err.message
            })
            break
        case 'SequelizeValidationError':
            res.status(400).json({
                name: 'Bad Request',
                message: [{ message: err.message }]
            })
            break
        case 'Forbidden':
            res.status(403).json({
                name: 'Forbidden',
                message: "You don't have access!"
            })
            break
        case 'Not Found':
            res.status(404).json({
                name: 'Not Found',
                message: 'File Not Found'
            })
            break
            case 'SequelizeDatabaseError':
            res.status(400).json({
                name: err.name,
                message: err.message
            })
            break
        case 'JsonWebTokenError':
            res.status(401).json({
                name: err.name,
                message: err.message
            })
            break
        default:
            status = 500
            res.status(status).json({
                name: err.name,
                message: err.message
            })
            break
    }
}

module.exports = errorHandler 