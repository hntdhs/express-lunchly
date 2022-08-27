/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
});

// psql -U postgres -d lunchly -a -f data.sql