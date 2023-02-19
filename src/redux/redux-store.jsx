import { createStore, combineReducers } from 'redux';
import { popUpReducer } from './reducers/popUpReducer';
import { animateTitleReducer } from './reducers/animateTitleReducer';

const appReducer = combineReducers({
  popUpReducer,
  animateTitleReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

const store = createStore(
  rootReducer,
);

export default store;