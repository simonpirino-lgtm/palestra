const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query("SELECT * FROM trainer");
    return rows;
};

exports.create = async (trainer) => {
    const { name, surname, specializzazione } = trainer;
    await db.query(
        "INSERT INTO trainer(name,surname,specializzazione) VALUES (?,?,?)",
        [name, surname, specializzazione]
    );
};

exports.update = async (id, trainer) => {
    const { name, surname, specializzazione } = trainer;
    await db.query(
        "UPDATE trainer SET name=?, surname=?, specializzazione=? WHERE id=?",
        [name, surname, specializzazione, id]
    );
};

exports.remove = async (id) => {
    await db.query("DELETE FROM trainer WHERE id=?", [id]);
};