module.exports.response = (res, next, statusCode, result, message) => {
  if (result instanceof Error) {
    return next(result);
  }
  return res.status(statusCode).json({
    status: 'success',
    message,
    data: result,
  });
};

module.exports.errorResponse = (res, status, message) =>
  res.status(status).json({
    status: 'error',
    message,
    data: null,
  });
