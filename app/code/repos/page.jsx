import React from 'react';

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/Han-Enc/repos');
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  // console.log(repos);

  return (
    <div className="repos-container">
      <h1>Github Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
