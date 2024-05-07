const Assistant = require('../models/assistant.model');

const createAssistant = async (req, res) => {
    try {
        const requiredFields = ['name', 'mobile', 'email', 'salary', 'city', 'country', 'department', 'role'];
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
        }

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

const updateAssistant = async (req, res) => {
    try {
        const assistant= await Assistant.findByIdAndUpdate(req.params.assistant_id, req.body, { new: true });
        if (!assistant) {
            return res.status(404).json({ message: 'Assistant not found' });
        }
        res.json(assistant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteAssistant = async (req, res) => {
    try {
        const assistant = await Assistant.findByIdAndDelete(req.params.assistant_id);
        if (!assistant) {
            return res.status(404).json({ message: 'Assistant not found' });
        }
        res.json({ message: 'Assistant deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createAssistant,
    getAssistantById,
    updateAssistant,
    deleteAssistant
};
