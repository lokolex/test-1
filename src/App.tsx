import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
