import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main'
import Nav from './components/Nav'
import About from './pages/About'
import StocksList from './pages/StocksList';
import StockDetails from './pages/StockDetails';

import data from './Data.js'


function App() {
  const apiKey = 'cf47ce1d01970bfe5c3338b6adbd37f9'

  

  return (
    <div className="App">
      <h1>iStocks</h1>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/stocks'>
          <StocksList apiKey={apiKey}/>
        </Route>
        <Route
          path='/stocks/:symbol'
          render={(routerProps) => {
            return <StockDetails apiKey={apiKey} {...routerProps}/>
          }}
          />
      </Switch>
      
    </div>
  );
}

export default App;
