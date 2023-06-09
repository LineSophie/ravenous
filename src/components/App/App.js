import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import './App.css';
import { businessData } from '../../data/businessData';
import SearchBar from '../SearchBar/SearchBar';

function App() {

  return (
  <div className="App">
    
    <h1 className='App-header'>ravenous</h1>

    <div className='backgroundImage'>
      <div className='img-overlay'>
       <SearchBar/>
      </div>
    </div>

    <BusinessList
     businesses = {businessData} 
    />

  </div>
  );
}

export default App;
