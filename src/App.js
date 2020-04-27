import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Feature } from './pages/Feature'
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feature" component={Feature} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
