import React from 'react';
import './App.css';
import MenuAppBar from "./component/MenuAppBar";

function App() {
  return (
    <div className="App">
      <MenuAppBar title='manual pages' isAuth={false}/>
    </div>
  );
}

export default App;
