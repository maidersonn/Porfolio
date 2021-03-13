const fetch = require("node-fetch");

const fetchGithubRepositories = () => {
  const options = {
    headers: {
      Authorization: "token b89cff9ad6567d7eb05b6a39386c4e46e7275ef0",
      "user-agent": "node.js",
    },
  };

  const responsePromise = fetch(
    "https://api.github.com/users/maidersonn/repos",
    options
  ).then((response) => response.json());
  return responsePromise;
};

module.exports = fetchGithubRepositories;
