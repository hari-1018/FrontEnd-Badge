import React from 'react';
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  const viewProduct = (productId) =>{
    navigate(`/product/${productId}`)
  }
    
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=>viewProduct(1)}>Product 1</button>
        <button onClick={()=>viewProduct(2)}>Product 2</button>
    </div>
  )
}

export default Home