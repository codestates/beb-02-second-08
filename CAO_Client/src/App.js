
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Footer from './Component/Footer';
import Home from './Pages/Home';
import Navigation from './Component/Navigation'

function App() {
  return (
    <div className="App" id="header">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
