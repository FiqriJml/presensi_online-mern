const logRequest = (req, res, next) => {
    console.log(`Endpoint diakses: ${req.method} ${req.originalUrl}`);
    next();
  };
  
  module.exports = logRequest;
  