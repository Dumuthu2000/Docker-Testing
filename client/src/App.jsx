import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const[users, setusers] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/user/get`)
    .then((res)=>{
      setusers(res.data);
    }).catch((err)=>{
      console.error("Fetching error", err)
    })
  },[])
  return (
    <div>
      <div className="">
        <h1>Users</h1>
        {users && users.map((user)=>(
          <div key={user._id} className="" style={{backgroundColor:"red", padding:"10px", marginBottom:"10px"}}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  )
}

export default App
