import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import initReactFastclick from 'react-fastclick';

import store from '_settings/store';
import routes from '_settings/routes';

import { getUser } from '_actions/user';
import { getFeed } from '_actions/feed';

import AudioPlayer from '_helpers/AudioPlayer';
import '_settings/main.styl';

initReactFastclick();
AudioPlayer.init();
const userId = 1;

store.dispatch(getUser(userId));
store.dispatch(getFeed(userId));

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      { routes }
    </Router>
  </Provider>
), document.getElementById('root'));
