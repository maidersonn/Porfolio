const express = require("express");
const app = express();
const port = 3300;
const router = express.Router();
const mustacheExpress = require("mustache-express");
const contactController = require("./controllers/ContactController");
const homeController = require("./controllers/HomeController");
const projectsController = require("./controllers/ProjectsController");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/view");

router.get("/", homeController);

router.get("/projects", projectsController);

router.get("/contact", contactController);

app.use("/", router);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
