const express = require('express');
const router = express.Router();

router.get('/api', (req, rest) => {
  rest.status(200).send({
    title: 'node API',
    version: '0.0.1'
  });
});

module.exports = router;
