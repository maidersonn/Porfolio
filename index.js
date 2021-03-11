const express = require("express");
const app = express();
const port = 3300;
const router = express.Router();
const mustacheExpress = require("mustache-express");
const https = require("https");
const { title } = require("process");
const fetch = require("node-fetch");
const { json } = require("express");

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
  const options = {
    headers: {
      Authorization: "token b89cff9ad6567d7eb05b6a39386c4e46e7275ef0",
      "user-agent": "node.js",
    },
  };

  const responsePromise = fetch(
    "https://api.github.com/users/maidersonn/repos",
    options
  )
    .then((response) => response.json())
    .then((repositories) => {
      const repositoriesToLayout = repositories.filter(
        (repository) =>
          repository.name !== "bikoteak" &&
          repository.name !== "Curso-de-JavaScript_ed15"
      );

      res.render("layout", {
        title: "Projects",
        projects: repositoriesToLayout,
        projectPartial: true,
      });
    });
});

router.get("/contact", (req, res) => {
  res.render("layout", { title: "Contact", contact: true });
});

app.use("/", router);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
