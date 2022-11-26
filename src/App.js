import logo from './logo.svg';
//import './App.css';
import Home from '../src/components/Home/home'
import Post from '../src/components/Post/post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='App'>
      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/products'/>
          <Route path='/sign-up'/>
        </Routes>  
      </Router>
    </div>

    </>
  );
}

export default App