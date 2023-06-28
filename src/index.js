import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';

import { App1 } from 'components/App1/App1';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  <Provider store = {store}>
  <BrowserRouter basename="/goit-react-hw-008-phonebook">
      <App1 />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
