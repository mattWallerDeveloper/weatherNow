import React from 'react';
import HeaderBar from "./components/HeaderBar";
import './App.scss';
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
      <React.Fragment>
          <HeaderBar/>
          <SearchBar/>
          <div className="container">

          </div>
      </React.Fragment>
  );
}

export default App;
