import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './Reducer/public-reducer';
import { ParentStoreState } from './StoreState/ParentState';

const store = createStore<ParentStoreState>(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
