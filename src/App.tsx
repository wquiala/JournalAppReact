import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import './styles/styles.scss';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
