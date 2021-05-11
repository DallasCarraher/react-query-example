import * as React from "react";
import { useQuery } from "react-query";

import { fetchBooks } from "./api/fetchBooks";
import logo from "./lotr.png";
import "./App.css";

function App() {
  const [msw, setMsg] = React.useState(() =>
    localStorage.getItem("useLiveApi")
  );
  const toggleMsw = () => {
    localStorage.getItem("useLiveApi")
      ? localStorage.removeItem("useLiveApi")
      : localStorage.setItem("useLiveApi", true);
    setMsg(!msw);
  };

  const bookQuery = useQuery("books", fetchBooks, {
    refetchOnWindowFocus: false,
  });
  const { data, isFetching } = bookQuery;

  const label = () => (msw ? "On" : "Off");

  return (
    <div className="App">
      <header className="App-header">
        <label className="Msw-toggle-label" htmlFor="msw-toggle">
          {label()}
        </label>
        <button id="msw-toggle" className="Msw-toggle" onClick={toggleMsw}>
          toggle msw
        </button>
        <code>react-query fetching pattern</code>
        <h2>LOTR Books</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <div className="list">
            {data?.docs.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
