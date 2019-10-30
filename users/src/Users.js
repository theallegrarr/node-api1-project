import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiBase=`http://localhost:3400`;

export default function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`${apiBase}/api/users`)
         .then(res => {
           setUsers(res.data);
         }).catch(err => console.log(err));
  }, [])

  const deleteUser = (id) => {
    axios.delete(`${apiBase}/api/users/${id}`)
         .then(res => {
           setUsers(users.filter(user => user.id !== id));
         }).catch(err => console.log(err));
  }
  
  return (<div>
    <h1>All Users</h1>
    {users.length > 0 ?
      users.map(user => (
        <div className='users'>
          <h4 style={{'color':'#09d3ac'}}>{user.name}</h4>
          <h4>{user.bio}</h4>
          <h4>{user.created_at}</h4>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      )) : `No Users Found!`
    }
  </div>);
}