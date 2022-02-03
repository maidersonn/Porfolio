const getRepositories = require("../domain/projectService");

const projectsController = (req, res) => {
  getRepositories().then((repos) => {
    res.render("layout", {
      title: "Projects",
      projects: repos,
      projectPartial: true,
    });
  });
};

module.exports = projectsController;
