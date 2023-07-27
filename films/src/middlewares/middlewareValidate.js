const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, title, opening_crawl, director, producer, release_date } =
    req.body;

  if (_id && title && opening_crawl && director && producer && release_date)
    return next();
  else throw new ClientError("Missing properties", 400);
};
