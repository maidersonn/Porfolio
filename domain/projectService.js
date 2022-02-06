const fetchGithubRepositories = require("../data/GithubClient");

const getRepositories = () =>
  fetchGithubRepositories()
    .then(filterRepos)
    .then(addWebToRepos)
    .then(addExtraProjects);

const extraProjects = [
  {
    name: "WorkAbroad",
    html_url: "https://github.com/Nomadas-Digitales",
    web: "https://workabroad.vercel.app/home",
  },
];

const projects = [
  {
    name: "Pokedex",
    web: "https://maipokedex.vercel.app/",
  },
  {
    name: "Cards-Game",
    web: "https://cards-game-maider.vercel.app/",
  },
  {
    name: "Beer-project",
    web: "https://beer-project-maider.vercel.app/",
  },
];

const addExtraProjects = (repositories) => repositories.concat(extraProjects);

const addWebToRepos = (repositories) =>
  repositories.map((repository) => {
    const project = projects.find((p) => p.name === repository.name);
    if (project) {
      repository.web = project.web;
    }

    return {
      name: repository.name,
      html_url: repository.html_url,
      web: repository.web,
    };
  });

const filterRepos = (repositories) =>
  repositories.filter((repository) => repository.name !== "Pokedex-Back");

module.exports = getRepositories;
