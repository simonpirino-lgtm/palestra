const service = require('../services/customerService');

exports.getAll = async (req, res) => {
    try {
        const data = await service.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        if (!req.body.trainer_id) {
            return res.status(400).json({ errore: "trainer_id obbligatorio" });
        }

        await service.create(req.body);
        res.json({ message: "Cliente inserito" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        await service.update(req.params.id, req.body);
        res.json({ message: "Cliente aggiornato" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        await service.remove(req.params.id);
        res.json({ message: "Cliente eliminato" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};