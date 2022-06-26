// how to get data from an rest API
// crud operation 
import React, {useState, useEffect}  from 'react';
import style from "../src/Rest_API/Restapi.Mosule.css";
import UserForm from './Rest_API/UserForm';
const URL = "https://rest-api-without-db.herokuapp.com/users/";

const App27 = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // update
    const [selectedUser, setSelectedUser] = useState({
        username : " ",
        email : " "
    })
    const [updateFlag, setUpdateFlag] = useState(false);
    const [selectedUserID, setSelectedUserId] = useState("");

    const getAllUsers=()=>{
        fetch(URL)
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch")
            }
            return res.json()
        })
        .then((data)=>{
            setUsers(data.users);
        })
        .catch((err)=>{
            setError(err.message)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    };

    useEffect(()=>{
        getAllUsers();
    },[]);
    const handleDelete = (id) => {
        fetch(URL + `/${id}`, {
            method : "DELETE",
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not delete")
            }
            getAllUsers();
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
    const addUser = (user) => {
        fetch(URL, {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then((res)=>{
            if(res.status === 201){
                getAllUsers();
            }else{
                throw new Error ("could not create a new user");
            }
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
    const handleEdit = (id) =>{
        setSelectedUserId(id);
        setUpdateFlag(true);
        // alert(id);
        const filterData = users.filter((user)=>user.id === id);
        // console.log(filterData);
        setSelectedUser({
            username: filterData[0].username,
            email: filterData[0].email
        });
    };
    const handleUpdate = (user) => {
        fetch(URL + `/${selectedUserID}`, {
            method : "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to Update");
            }
            getAllUsers();
            setUpdateFlag(false);
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
  return (
    <div className='app'>
        <h1>Use Management App</h1>
        {isLoading && <h2>Loading....</h2>}
        {error && <h2>{error}</h2>}

        {updateFlag ? (<UserForm btnText="Update User" selectedUser={selectedUser} handleSubmitData = {handleUpdate} />) : <UserForm btnText="Add User" handleSubmitData = {addUser} /> }

        {/* <UserForm btnText="Add User" handleSubmitData = {addUser} /> */}
       <section>
       {users && users.map((user)=>{
            const {id, username, email} = user;
            return (
                <article key={id} className="card">
                    <p>{username}</p>
                    <p>{email}</p>
                    <button className='btn' onClick={() =>{
                        handleEdit(id);
                    }}>Edit</button>
                    <button className='btn' onClick={()=>{
                        handleDelete(id);
                    }}>Delete</button>
                </article>
            )
        })}
       </section>
    </div>
  )
}

export default App27;