import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Reducer/public-reducer';
import { ParentStoreState } from './StoreState/ParentState';

const store = createStore<ParentStoreState>(reducer)

ReactDOM.render(
  <Provider store={store}>
    < App / > 
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
