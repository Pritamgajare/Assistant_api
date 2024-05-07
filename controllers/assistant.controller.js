const Assistant = require('../models/assistant.model');

const createAssistant = async (req, res) => {
    try {
        const assistant = await Assistant.create(req.body);
        res.status(201).json({ id: assistant._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAssistantById = async (req, res) => {
    try {
        const assistant = await Assistant.findById(req.params.assistant_id);
        if (!assistant) {
            return res.status(404).json({ message: 'Assistant not found' });
        }
        res.json(assistant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createAssistant,
    getAssistantById
};
