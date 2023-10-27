import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {
    const {currentUser,updateUser,setEditing}=props;

    const[user,setUser]=useState(currentUser);

    useEffect(()=>{
        setUser(currentUser);
    },[currentUser])

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.name === '' || user.username === ''  )return;
        updateUser(user.id,user);
     }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name </label>
        <input type="text" onChange={handleChange} name="name" value={user.name}  class="form-control mb-3" />
        <label htmlFor="">User Name </label>
        <input type="text" onChange={handleChange} name="username" value={user.username}   class="form-control" />
        <button className='btn btn-primary mt-3'>Update User</button>
        <button onClick={()=>{
            setEditing(false);
        }} className='btn btn-primary mt-3 mx-3'>Cancel</button>
    </form>
    </>
  )
}

export default EditUserForm