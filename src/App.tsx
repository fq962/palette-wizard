import "./App.css";
import ColorCard from "./app/components/color-card/colorCard";
import SearchBar from "./app/components/search-bar/searchBar";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Palette Wizard</h1>
        <p className="description">
          Write a HEX code, a keyword, the name of a color, or a type of project
          or idea so that the AI can generate a palette suitable for you.
        </p>
      </div>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="color-card-container">
        <ColorCard />
      </div>
    </>
  );
}

export default App;
