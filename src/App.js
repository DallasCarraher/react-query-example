import { useQuery } from "react-query";

import { fetchBooks } from "./api/fetchBooks";
import logo from "./lotr.png";
import "./App.css";

function App() {
  const bookQuery = useQuery("books", fetchBooks, {
    refetchOnWindowFocus: false,
  });
  const { data, isFetching } = bookQuery;

  return (
    <div className="App">
      <header className="App-header">
        <code>react-query fetching pattern</code>
        <h2>LOTR Books</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <div className="list">
            {data?.docs.map(({ id, name }) => (
              <li key={name}>{name}</li>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
