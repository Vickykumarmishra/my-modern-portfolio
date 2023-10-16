import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Home/>

      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
