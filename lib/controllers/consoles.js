const { Router } = require('express');
const Console = require('../models/Console');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const consoleById = await Console.getById(id);
    res.json(consoleById);
  })

  .get('/', async (req, res) => {
    const consoleList = await Console.getAll();
    res.json(consoleList);
  });
