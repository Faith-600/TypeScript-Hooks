import { useContext, useState } from 'react'
import UserContext  from './store'



function ConsumerComponent() {
    const user = useContext(UserContext)
  return (
    <div>
        First:{user.first}
        <div>
        Last:{user.last}
        </div>
        
    </div>
  )
}




function UseContextComponent() {
    const [user,setUser] = useState({
    first:'Ritter',
    last:'Eze'
    })
  return (
  <UserContext.Provider value={user}>
<ConsumerComponent/>
<button onClick = {()=>setUser({
    first:'Love',
    last:'other'
})}> Change User</button>
  </UserContext.Provider>
  )
}

export default UseContextComponent