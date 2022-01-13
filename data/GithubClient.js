const fetch = require("node-fetch");

const fetchGithubRepositories = () => {
  const responsePromise = fetch(
    "https://api.github.com/users/maidersonn/repos"
  ).then((response) => response.json());
  return responsePromise;
};

module.exports = fetchGithubRepositories;
