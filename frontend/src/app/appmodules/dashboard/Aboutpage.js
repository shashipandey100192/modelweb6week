import React, { useState } from 'react'

function Aboutpage() {

    const [sv,sf]=useState(50)

    const name="ravi singh";

    const abc = ()=>{
            sf(8000);
    }

    const xyz = (u)=>{
        console.log(u)
        sf(u.target.value);
    }

  return (
    <div className='p-5'>
        <h1>this is text</h1>
            <h1>{sv}</h1>
            <input type='text' value={sv} onInput={xyz}/>
            <button type='button' onClick={abc}> update</button>


    </div>
  )
}

export default Aboutpage