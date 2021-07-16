import React from "react";

const Navbar: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
};

export default Navbar;
