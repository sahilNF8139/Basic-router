import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Detail from './Detail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
      <Route path="*" element={'error' } ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
