import React, {useState,useEffect} from 'react'
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import Home1 from './components/Home1';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [buttonText, setButtonText] = useState('');

  useEffect(()=>{
    if(location.pathname==='/'){
      setButtonText('Register')
    }else if(location.pathname==='/register'){
      setButtonText('Login')
    }else if(location.pathname==='/login'){
      setButtonText('Home')
    }
  }, [location.pathname]);

  const handleText = ()=>{
    if(buttonText==='Register'){
      navigate('/register')
    }else if(buttonText==='Login'){
      navigate('login')
    }else if(buttonText==='Home'){
      navigate('/')
    }
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home1/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    <button onClick={handleText}>{buttonText}</button>
    </>
  
    
  );
}

export default App;
