
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
 
import Footer from './Component/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      
      <Router>

      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
    </div>
       
  );
}

export default App;
