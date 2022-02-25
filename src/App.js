import logo from './logo.svg';
import './App.css';
import './pages/authentication/signup';
//import {BrowserRouter,Route} from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Signup from './pages/authentication/signup';
import Login from './pages/authentication/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       {/* <Login/> */}
      <Signup/>
      {/* <Landingpage/> */}
      
    </div>
  );
};

export default App;
