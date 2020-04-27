import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Feature } from './pages/Feature'

function App() {
  return (
    <BrowserRouter>
      <div className='container pt-4'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feature" component={Feature} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
