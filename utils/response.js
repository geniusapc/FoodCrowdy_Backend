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

module.exports.errorResponse = (res, status, message, type) =>
  res.status(status).json({
    status: 'error',
    type,
    message,
    data: null,
  });
