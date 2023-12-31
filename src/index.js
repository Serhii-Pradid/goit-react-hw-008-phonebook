import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  <Provider store = {store}>
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter basename="/goit-react-hw-008-phonebook">
      <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
