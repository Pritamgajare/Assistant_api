const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistant.controller');

router.post('/create', assistantController.createAssistant);

module.exports = router;