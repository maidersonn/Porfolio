const express = require("express");
const app = express();
const port = 3300;
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname + "/projects.html"));
});

app.use("/", router);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
