const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistant.controller');

router.post('/create', assistantController.createAssistant);
router.get('/:assistant_id', assistantController.getAssistantById);

module.exports = router;