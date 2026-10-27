import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>      
        <Product/>
        <Feedback/>            
      <Footer/>  
      
    </div>
  );
}

export default App;
