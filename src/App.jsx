/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import HomePage from './routes/homePage';
import DetailsPage from './routes/detailsPage';
import store from './redux/store';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:cryptoID" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
