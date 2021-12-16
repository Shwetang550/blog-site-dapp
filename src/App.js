import React from 'react';

// custom components
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';

// 3rd party components
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={Home} />
      <Route exact path='/contact-us' component={Home} />
      <Route exact path='/sign-in' component={Home} />
      <Route exact path='/sign-up' component={Home} />

      <Route exact path='/blog' component={Blog} />

      <Redirect to='/' />

    </Switch>
  );
}

export default App;
