const express = require('express');
const router = express.Router();
const { pool } = require('../db/index');


router.post('/', async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (name, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, description, image]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);  // 👈 ADD THIS LINE
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
