import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
