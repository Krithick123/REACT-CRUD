import React from 'react'

const UserTable = (props) => {
    const {users,deleteUser,editRow}=props;
  return (
    <>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length>0?(
                    users.map((user)=>{
                        return(
                            <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={()=>editRow(user)} className='btn btn-primary mx-2'>Edit</button>
                                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                ):(
                    <tr>
                        <td colSpan={3}>NO USERS</td>
                    </tr>
                )}
            
            </tbody>
        </table>
    </>
  )
}

export default UserTable