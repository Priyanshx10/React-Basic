import React from 'react'

const Numbers ={
    x : 5,
    y : 6,
    z : 8
}

const Multiplication = () => {
  return (
    <div>
        Multiplication ={Numbers.x * Numbers.y * Numbers.z}

        <br/>
   
        Division ={(Numbers.x / 2 )*(Numbers.y / 2 ) * (Numbers.z / 2 )}
    </div>
  )
}

export default Multiplication