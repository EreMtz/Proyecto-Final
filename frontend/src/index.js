import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register()

serviceWorker.unregister();