const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/', controller.get);
router.get('/:Name', controller.getByName);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.del);

module.exports = router;
