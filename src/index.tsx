import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './Store';
import { ErrorMessage } from './ErrorMessage';
import { AppConfiguration } from './types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const configuration = fetch('/configuration');
configuration
.then(response => {
  if (!response.ok) throw new Error('Invalid response');
  return response.json();
})
.then((configuration: AppConfiguration) => {
  const { currentScreenUrl, statusUrl } = configuration;
  
  root.render(
    <React.StrictMode>
      <App currentScreenUrl={currentScreenUrl} statusUrl={statusUrl} store={new Store(new FileReader())} />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})
.catch(_ => {
  root.render(
    <React.StrictMode>
      <ErrorMessage />
    </React.StrictMode>
  );
})