import { async } from '@firebase/util'
import { getDocs,collection, doc,addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useResolvedPath } from 'react-router-dom'
import {db} from '../firebase'
import '../App.css'
function Studentd(){
    const [newName,setNewName]=useState("")
    const [newAge,setNewAge]=useState(0)
    const [users,setUsers]=useState([])
    const usersCollectionRef =collection(db,'users')
const createUser =async () =>  {
    await addDoc(usersCollectionRef,{ name: newName, age: newAge })
}
    useEffect(()=>{
        const getUsers= async ()=>{
            const data= await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id}))); 
        }
        
        getUsers();
    },[]);

    return(
        <div className='App'>
            <div>
            <input placeholder='Enter User Name'
            onChange={(event)=>{
                setNewName(event.target.value);
            }}/>
            <input placeholder='Enter user Age'
            onChange={(event)=>{
                setNewAge(event.target.value)
            }}/>
            <button onClick={createUser}>Add Users</button></div>
            {users.map((user)=>{
            return(
            <div>
                {" "}
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
                </div>
            );                
    })}
    </div>
    );
}
export default Studentd;
