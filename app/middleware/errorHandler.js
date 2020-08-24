/**
 * Gestión de errores
 */
export default (error, request, response, next) => {
    if (response.headersSent) {
      return next(error)
    }
    response.status(500).json({ error: error });
}
  