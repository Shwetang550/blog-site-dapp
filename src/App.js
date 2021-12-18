import React from 'react';

// custom components
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import CreateBlog from './pages/create-blog/CreateBlog';

// 3rd party components
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={Home} />
      <Route exact path='/contact-us' component={Home} />
      <Route exact path='/sign-in' component={Home} />
      <Route exact path='/create-blog' component={CreateBlog} />

      <Route exact path='/blog/:id' component={Blog} />

      <Redirect to='/' />

    </Switch>
  );
}

export default App;
