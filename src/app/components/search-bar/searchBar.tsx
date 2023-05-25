/*
Crear un componente llamado SearchBar que
tengo un input de texto y un boton.
*/

import React from "react";
import "./searchBar.css";

export default function SearchBar() {
  const generatePalette = () => {
    console.log("Generate palette");
  };

  return (
    <div className="searchBar">
      <input
        className="search"
        type="text"
        placeholder="#ffff, baby blue, destist app"
      />
      <button className="btn-generate" onClick={generatePalette}>
        Generate
      </button>
    </div>
  );
}
