const Assistant = require('../models/assistant.model');

const createAssistant = async (req, res) => {
    try {
        const assistant = await Assistant.create(req.body);
        res.status(201).json({ id: assistant._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createAssistant,
};
