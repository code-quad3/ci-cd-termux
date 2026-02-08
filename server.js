const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => res.send("Hello World! App is running on Termux!"));

app.listen(PORT, () => console.log(`App server running on port ${PORT}`));
