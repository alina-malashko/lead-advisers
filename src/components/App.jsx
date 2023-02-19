import { Provider } from 'react-redux';
import store from '../redux/redux-store';
import MainPage from './MainPage/MainPage';
import EventsPage from './EventsPage/EventsPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <MainPage />
        <EventsPage />
      </Provider>
    </>
  );
}

export default App;