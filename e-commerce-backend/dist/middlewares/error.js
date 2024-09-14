export const errorMiddleware = (error, req, res, next) => {
    error.message = error.message || "Internal Server Error";
    error.statusCode = error.statusCode || 500;
    return res.status(error.statusCode).json({
        status: false,
        message: error.message,
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next).catch(next));
};
