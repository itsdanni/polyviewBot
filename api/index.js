/**
 * routing hub for all api routes
 */
const router = require('express').Router();

module.exports = router;

router.use('/messages', require('./messages'));
router.use('/calls', require('./calls'));

// error handling middleware for routes
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
