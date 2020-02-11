import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer(history), {}, composeEnhancers(applyMiddleware(routerMiddleware(history))));

export default store;