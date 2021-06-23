// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://react-template-web.herokuapp.com/api")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>Added to Heroku</p>
      </header>
    </div>
  );
}

export default App;
