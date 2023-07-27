const store = require("../database");
const catchedAsync = require("../utils/catchedAsync");

module.exports = {
  list: catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
  }),
  get: catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
  }),
  create: catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await store[model].insert(req.body);
    res.status(200).json(response);
  }),
};
