import "./App.css";

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';


import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import FirstModel from "./components/firstModel";
import SecondModel from "./components/secondModel";

function App() {
  return (
    <Router>
      <Header/>
          <Routes>
            <Route path="/model1/" element={<FirstModel/>}/>
            <Route path="/model2/" element={<SecondModel/>}/>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        <Footer/>
  </Router>
  );
}

export default App;
