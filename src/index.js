import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import Restaurant from './components/Restaurant';
import UserNew from './components/UserNew';
import UserShow from './components/UserShow';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';
import Home from './components/Home';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="/user/new" component={UserNew} />
          <Route path="/user/:id" component={UserShow} />
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
