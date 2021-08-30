import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {Home}></Route>
          <Route path = '/services' component = {Services}></Route>
          <Route path = '/products' component = {Products}></Route>
          <Route path = '/sign-Up' component = {SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
