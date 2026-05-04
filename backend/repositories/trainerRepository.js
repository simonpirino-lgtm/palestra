const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query("SELECT * FROM trainer");
    return rows;
};

exports.create = async (trainer) => {
    const { name, surname, speciality } = trainer;
    await db.query(
        "INSERT INTO trainer(name,surname,speciality) VALUES (?,?,?)",
        [name, surname, speciality]
    );
};

exports.update = async (id, trainer) => {
    const { name, surname, speciality } = trainer;
    await db.query(
        "UPDATE trainer SET name=?, surname=?, speciality=? WHERE id=?",
        [name, surname, speciality, id]
    );
};

exports.remove = async (id) => {
    await db.query("DELETE FROM trainer WHERE id=?", [id]);
};