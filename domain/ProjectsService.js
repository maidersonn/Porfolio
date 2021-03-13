const fetchGithubRepositories = require("../data/GithubClient");

const getRepositories = () => fetchGithubRepositories().then(filterRepos);

const filterRepos = (repositories) =>
  repositories.filter(
    (repository) =>
      repository.name !== "bikoteak" &&
      repository.name !== "Curso-de-JavaScript_ed15"
  );

module.exports = getRepositories;
