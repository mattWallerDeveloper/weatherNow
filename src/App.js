import React from 'react';
import HeaderBar from './components/HeaderBar';
import './App.scss';
import SearchBar from './components/SearchBar';
import CardFlexContainer from './components/CardFlexContainer';

const App = () => {
  return (
      <React.Fragment>
          <div className="base64">
              <HeaderBar/>
              <SearchBar/>
              <CardFlexContainer/>
          </div>
      </React.Fragment>
  );
}

export default App;
