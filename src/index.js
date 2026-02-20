import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

const appId = process.env.REACT_APP_SPEECHLY_APP_ID || '';

ReactDOM.render(
  <React.StrictMode>
    {appId ? (
      <SpeechProvider appId={appId} language="en-US">
        <Provider>
          <App />
        </Provider>
      </SpeechProvider>
    ) : (
      <Provider>
        <App />
      </Provider>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);
