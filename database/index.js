const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database/index");

// Character.get(2).then((res) => console.log(res));
// Planet.get(2).then((res) => console.log(res));
// Film.get(2).then((res) => console.log(res));

server.listen(8004, () => {
  console.log("Server listening on port 8004");
});
