import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';

/** providers */
import ReactQueryProvider from '@/api/react-query/ReactQueryProvider';

import App from '@/App';
import * as serviceWorker from './serviceWorker';
import '@/styles/tailwind.css';
import reportWebVitals from './reportWebVitals';

const Index: FC = ({ children }) => (
  <React.StrictMode>
    <ReactQueryProvider>
      {children}
      <Toaster />
    </ReactQueryProvider>
  </React.StrictMode>
);

ReactDOM.render(
  <Index>
    <App />
  </Index>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
