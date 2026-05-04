const repo = require('../repositories/customerRepository');

exports.getAll = () => repo.getAll();
exports.create = (data) => repo.create(data);
exports.update = (id, data) => repo.update(id, data);
exports.remove = (id) => repo.remove(id);