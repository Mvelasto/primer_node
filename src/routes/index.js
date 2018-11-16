const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('index.html', { tittle: 'My First page' });
})

router.get('/contact', (req, res) =>{
  res.render('contact', { tittle: 'Contact Page' });
})

router.get('*', (req, res) =>{
  res.end('Archvo no encontrado');
})
module.exports = router;
