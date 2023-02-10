
import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Card from './components/Card';
import ProductsCard from './components/ProductsCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Counter/>
      <ProductsCard/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
