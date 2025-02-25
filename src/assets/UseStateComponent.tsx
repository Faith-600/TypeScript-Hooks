import { useState } from "react"

function UseStateComponent() {
    const [count, setCount] = useState<number[]>([])
  return (
    <>
    <div> 
    <button onClick={()=>setCount([...count ,count.length+1])}>Add to List</button>
  </div>
  {JSON.stringify(count)}
  </>
  )
}

export default UseStateComponent