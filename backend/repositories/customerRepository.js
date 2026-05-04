const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query(`
        SELECT 
            customer.*,
            trainer.name AS trainer_name,
            trainer.surname AS trainer_surname
        FROM customer
        JOIN trainer ON customer.trainer_id = trainer.id
    `);
    return rows;
};

exports.create = async (customer) => {
    const { name, surname, email, trainer_id } = customer;
    await db.query(
        "INSERT INTO customer(name,surname,email,trainer_id) VALUES (?,?,?,?)",
        [name, surname, email, trainer_id]
    );
};

exports.update = async (id, customer) => {
    const { name, surname, email, trainer_id } = customer;
    await db.query(
        "UPDATE customer SET name=?, surname=?, email=?, trainer_id=? WHERE id=?",
        [name, surname, email, trainer_id, id]
    );
};

exports.remove = async (id) => {
    await db.query("DELETE FROM customer WHERE id=?", [id]);
};