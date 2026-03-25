import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let result = await res.json();
    setData(result);
  };

  return (
    <div>
      <button onClick={fetchData}>Load Users</button>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
