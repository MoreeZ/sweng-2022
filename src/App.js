import "./App.css";

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';


import Quality from './components/qualityPage';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import ModelPage from './components/modelPage';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header/>
          <Routes>
            <Route path="/quality-page/" element={<Quality/>}/>
            <Route path="/model/" element={<ModelPage/>}/>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        <Footer/>
  </Router>
  );
}

export default App;
