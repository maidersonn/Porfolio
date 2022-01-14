const express = require("express");
const app = express();
const port = 3300;
const router = express.Router();
const mustacheExpress = require("mustache-express");
const {
  contactController,
  postController,
} = require("./controllers/ContactController");
const homeController = require("./controllers/HomeController");
const projectsController = require("./controllers/ProjectsController");

const bodyParser = require("body-parser");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/view");

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", homeController);

router.get("/projects", projectsController);

router.get("/contact", contactController);

app.post("/contact", postController);

app.use("/", router);
app.use(express.static("public"));
app.listen(process.env.PORT || port, () => {
  console.log(`server started on port ${port}`);
});
