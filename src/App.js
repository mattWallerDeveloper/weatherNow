import React from 'react';
import HeaderBar from './components/HeaderBar';
import './App.scss';
import SearchBar from './components/SearchBar';
import CardFlexContainer from './components/CardFlexContainer';

const App = () => {
  return (
      <React.Fragment>
          <HeaderBar/>
          <SearchBar/>
          <CardFlexContainer/>
      </React.Fragment>
  );
}

export default App;
