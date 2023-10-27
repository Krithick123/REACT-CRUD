import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserTable from "./tables/UserTable";
import { useState } from "react";
import Adduser from "./form/Adduser";
import EditUserForm from "./form/EditUserForm";

function App() {
  const userData=[
    {id:1,name:"KRITHICK",username:"MURUGESAN"},
    {id:2,name:"KUMAR",username:"RAJ"},
    {id:3,name:"ANU",username:"PRIYA"}
  ]
  const [users,setUsers]=useState(userData);

  const adduser=(user)=>{
    user.id=users.length +1;
    setUsers([...users,user])
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>{
      return user.id !== id;
    }))
    setEditing(false)
  }
  const [editing,setEditing]=useState(false);

  const initialFormState={
    id:null,
    name:'',
    username:''
  }
  const[currentUser,setCurrentUser]=useState(initialFormState);

  const editRow=(user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }

  const updateUser=(id,updatedUserData)=>{
    setEditing(false);
    setUsers(users.map((user)=>user.id === id ?updatedUserData:user))
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5">CRUD APP</h1>
        <div className="row ">
          <div className="col-6 ">
            {editing?(
              <div>
                <h2>Edit User</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                  setEditing={setEditing}/>
              </div>
            ):(
              <div>
                <h2>Add New User</h2>
                <Adduser adduser={adduser}/>
              </div>
              
            )}
          </div>
          <div className="col-6 ">
            <h2>View Users</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
