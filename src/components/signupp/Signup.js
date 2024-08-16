import React, { useState } from 'react'
import styles from './Signup.module.css'
import { Link , useNavigate} from "react-router-dom"
import InputControl from '../inputControl/InputControl'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { auth } from '../../firebase'

const Signup = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name:"",
        email:"",
        pass: "", 
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmit = () => {
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        createUserWithEmailAndPassword(auth, values.email,values.pass).then(async(res) => {
            setSubmitButtonDisabled(false);
            const user =  res.user;
            await updateProfile(user, {
                displayName: values.name,
            });
            navigate("/login");
        })
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);    
        });
    };


  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registration </h1>
        <InputControl label="Name" placeholder="Enter Your Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value}))}/>
        <InputControl label="Email" placeholder="Enter Email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value}))}/>
        <InputControl label="Password" placeholder="Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value}))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
         <button onClick={handleSubmit}
         disabled={SubmitButtonDisabled}>
         Register</button>
          <p>
            Already have an account?{" "}
            <span>
                <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
    </div> 
</div>
    )
}

export default Signup
