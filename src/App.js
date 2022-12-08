import './App.css';
import Header from './Header/Header';
import Product from './Product/Product';
import Banner from './Header/Banner';

function App() { 
  return (
    <div className='container'>
      <div className='row'>
     <Header />
     <Banner/>
     <Product/>
     </div>
    </div>
  );
}

export default App;
