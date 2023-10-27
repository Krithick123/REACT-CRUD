import React, { useState } from 'react'

const Adduser = (props) => {
    const {adduser}=props;
    const initialFormState={
        id:null,
        name:'',
        username:''
    }
    const [user,setUser]=useState(initialFormState);
    
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.name === '' || user.username === ''  )return;
        adduser(user);
        setUser(initialFormState)
     }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name </label>
        <input type="text" onChange={handleChange} name="name" value={user.name}  class="form-control mb-3" />
        <label htmlFor="">User Name </label>
        <input type="text" onChange={handleChange} name="username" value={user.username}   class="form-control" />
        <button className='btn btn-primary mt-3'>Add User</button>
    </form>
    </>
  )
}

export default Adduser