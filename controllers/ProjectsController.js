const getRepositories = require("../domain/ProjectsService");

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
