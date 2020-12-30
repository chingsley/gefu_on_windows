import express from 'express';

const router = express.Router();

router.get('/profile', (req, res, next) => {
  res.send('testing....');
});

export default router;
