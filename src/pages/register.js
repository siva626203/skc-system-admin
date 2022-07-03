import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import {db} from '../firebase'
import { getDocs,collection, doc ,addDoc } from 'firebase/firestore'
const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const [newName,setNewName]=useState("")
  const [users,setUsers]=useState([])


  const usersCollectionRef =collection(db,'users')
const createUser =async () =>  {
  await addDoc(usersCollectionRef,{ name: newName, email: email,})
}
  useEffect(()=>{
      const getUsers= async ()=>{
          const data= await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id}))); 
      }
      
      getUsers();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {

     const{users}= await signUp(email, password);
      
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" onClick={createUser}>
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};


export default Register;