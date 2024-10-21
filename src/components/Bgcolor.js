import React, {useState} from 'react'

const Bgcolor = () => {
    const [isColor, setIsColor] = useState(false);

    const changeColor = () =>{
        setIsColor(!isColor)
    }

  return (
    <>
    <div style={{width: '300px', height:'300px', backgroundColor : isColor ? 'green':'red'}}>Change Color</div>
    <button onClick={changeColor}>Change BG</button>
        
    </>
  )
}

export default Bgcolor;