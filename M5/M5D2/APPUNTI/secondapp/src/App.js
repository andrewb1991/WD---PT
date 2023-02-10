import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Index/>}/>
    <Route path='/about' element={<About/>}>
      <Route path='contact' element={<Index/>}/>
    </Route>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter> 
  
  );
}

export default App;
