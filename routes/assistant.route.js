const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistant.controller');

router.post('/create', assistantController.createAssistant);
router.get('/:assistant_id', assistantController.getAssistantById);
router.put('/:assistant_id', assistantController.updateAssistant);
router.delete('/:assistant_id', assistantController.deleteAssistant);

module.exports = router;