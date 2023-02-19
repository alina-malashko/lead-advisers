import { Provider } from 'react-redux';
import store from '../redux/redux-store';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;