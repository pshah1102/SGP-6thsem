import logo from './logo.svg';
import './App.css';
import './pages/authentication/signup';
//import {BrowserRouter,Route} from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Signup from './pages/authentication/signup';
import Login from './pages/authentication/login'
// import Navigator from './components/Navbar/navbar';
// import Header from './components/header/header';
import Paperbase from './components/dashboard/Paperbase';
import Navigator from './components/dashboard/Navigator';
import Header from './components/dashboard/Header';
import Content from './components/dashboard/Content';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Profile from './components/profile/Profile';
function App() {
  return (
    <Routes>
         {/* <Login/>   */}
        {/* <Navigator/>
        <Header/>  */}
      {/* <Signup/>  */}
      {/* <Landingpage/> */}
      <Route  path="/" element={<Paperbase/>}/> 
        <Route path="login" element={<Login/>}/>
      {/* </Route> */}
    </Routes>

  );
};

export default App;
