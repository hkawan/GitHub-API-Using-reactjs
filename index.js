import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        <h1>Account name: {data.login}</h1>
        <h1>Avatar: <img src={data.avatar_url} width={100} /></h1>
        <h1>Public Repositories: {data.public_repos}</h1>
      </div>
    );
  }
  return null; 
}

function App() {
  return <GitHubUser login="hkawan" />;
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

