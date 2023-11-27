const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "I am data from the server called from the client" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});