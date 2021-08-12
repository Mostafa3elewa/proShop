//overwrite the default erreor handler middelware must take these 4 props

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const notFound = (req, res, next) => {
  const error = new Error(`not found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export { notFound, errorHandler };
