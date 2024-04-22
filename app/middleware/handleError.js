const handleError = ((err, req, res, next) => {
    console.error(err); // Log del error
    res.status(err.status || 500).json({ message: err.message || 'Error interno del servidor' });
  });
  
module.exports = { handleError }