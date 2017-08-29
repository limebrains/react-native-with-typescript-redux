import * as React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import TabBarNavigation from './TabBarNavigation';

const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <TabBarNavigation/>
    </Provider>
  );
};

export default App;
