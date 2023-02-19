import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { popUpReducer } from './reducers/popUpReducer';

const appReducer = combineReducers({
  popUpReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

const store = createStore(
  rootReducer,
);

export default store;