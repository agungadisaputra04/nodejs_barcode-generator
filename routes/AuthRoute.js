// routes/AuthRoute.js atau routes/route.js
import express from 'express';
import db from '../config/Database.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const { name_link } = req.body;

  try {
    // Simpan data ke database
    const result = await db.execute('INSERT INTO gene (name_link) VALUES (?)', [name_link]);
    const insertedId = result[0].insertId;

    // Berikan respons dengan data yang baru saja dimasukkan
    res.status(200).json({
      id: insertedId,
      name_link: name_link
    });
  } catch (error) {
    console.error('Error adding link:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




export default router;

