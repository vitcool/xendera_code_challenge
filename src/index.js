import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
//components
import App from './App';
//styles
import './index.css';

import configureStore from './config/configStore';
import rootReducer from './modules';
import rootSaga from './sagas';

const store = configureStore(rootReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
