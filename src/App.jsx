import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import HomePage from './routes/homePage';
import DetailsPage from './routes/detailsPage';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
