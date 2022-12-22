import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./store/sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>
);
