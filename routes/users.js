const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'User list' });
});
/* GET users listing. */
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'User id' });
});
/* GET users listing. */
router.post('/', (req, res) => {
  res.status('201').json({ message: 'User id created successfully' });
});
/* GET users listing. */
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'User id modified successfully' });
});
/* GET users listing. */
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'User id deleted successfully' });
});
module.exports = router;
