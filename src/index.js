import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { featuresReducer } from "./reducers/featuresReducer";
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
// import AddedFeature from './components/AddedFeature';

const store = createStore(featuresReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
