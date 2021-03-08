const express = require("express");
const app = express();
const port = 3300;
const path = require("path");
const router = express.Router();
let mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/view");

router.get("/", (req, res) => {
  res.render("layout", {
    title: "Home",
    home: true,
  });
});

router.get("/projects", (req, res) => {
  res.render("layout", { title: "Projects", projects: true });
});

router.get("/contact", (req, res) => {
  res.render("layout", { title: "Contact", contact: true });
});

app.use("/", router);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
