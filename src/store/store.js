import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer/index';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducer,enhancer(applyMiddleware()));

export default store;
