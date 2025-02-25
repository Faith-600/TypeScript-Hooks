import { useEffect, useState } from 'react'

function UseEffectComponent() {
    const[value,setValue] =useState(1);

    useEffect(()=>{
        const timer = window.setInterval(()=>{
            setValue((val)=>val + 1)
        },1000);
        return ()=>window.clearInterval(timer)
    },[])
  return (
    <div>{value}</div>
  )
}

export default UseEffectComponent