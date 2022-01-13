const fetchGithubRepositories = require("../data/GithubClient");

const projectsController = (req, res) => {
  fetchGithubRepositories().then((repos) => {
    res.render("layout", {
      title: "Projects",
      projects: repos,
      projectPartial: true,
    });
  });
};

module.exports = projectsController;
