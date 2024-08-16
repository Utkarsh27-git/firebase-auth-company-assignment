import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link , useNavigate} from "react-router-dom"
import InputControl from '../inputControl/InputControl'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const Login = () => {
    const navigate = useNavigate();
const [values,setValues] = useState({
    email:"",
    pass: "", 
});
const [errorMsg, setErrorMsg] = useState("");
const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
const handleSubmit = () => {
    if( !values.email || !values.pass){
        setErrorMsg("Fill all fields");
        return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    
    signInWithEmailAndPassword(auth, values.email,values.pass).then(async(res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
    })
    .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);    
    });
};

  return (
    <div className={styles.container}>

        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login </h1>

            <InputControl label="Email" onChange={event=>setValues(prev=>({...prev,email:event.target.value}))} placeholder="Enter Email address"/>
            <InputControl label="Password" onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))} placeholder="Enter Password"/>

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
             <button disabled={SubmitButtonDisabled} onClick={handleSubmit}>Login</button>
              <p>
                Create an account{" "}
                <span>
                    <Link to="/signup">Register</Link>
                </span>
              </p>
            </div>
        </div> 
    </div>
  )      
}

export default Login
