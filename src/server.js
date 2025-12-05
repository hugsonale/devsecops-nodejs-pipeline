const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "DevSecOps Node.js App Running 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
