import React from 'react';
import './App.css';
import { BrowserRouter ,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Routes from './Components/Routes'
import Footer from  './Components/Footer'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App-header">
      <Route render={(props) =>
      <div>
        
        <Banner/>
        <hr></hr>
        <NavBar {...props}/>
        <hr></hr>
        <Routes/>
      </div> }/>
        <Footer/>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
