/* Author: Haroon Awan 
   Created: 25-05-2020
 */

import React, { useState, useEffect } from 'react'; //import hook functions
import ReactDOM from 'react-dom';

/* This function fetches data from Github's API and stores it in JSON,
   outputs in h1 tags using JSX. 

*/
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

// login can be changed to fetch any GitHub account's API
function App() {
  return <GitHubUser login="hkawan" />;
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

