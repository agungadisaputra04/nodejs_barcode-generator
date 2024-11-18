import db from '../config/Database.js';

// Fungsi untuk menambahkan link baru
const addLink = (name_link, callback) => {
  const query = 'INSERT INTO gene (name_link) VALUES (?)';
  db.query(query, [name_link], (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, { id: results.insertId, name_link });
  });
};

// Fungsi untuk mengambil semua link
const getLinks = (callback) => {
  const query = 'SELECT * FROM gene';
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
};

module.exports = {
  addLink,
  getLinks
};
