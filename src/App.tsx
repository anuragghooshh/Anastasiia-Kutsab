import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
