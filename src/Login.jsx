import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login(){
    let username=useRef(null);
    let password=useRef(null);
    let dispatch=useDispatch();
    let navigate=useNavigate();

    let Logincheck=()=>{
       // username.current.value==="Ratan" &&
        //password.current.value==="Ratan@123" ?
      //  console.log("login sucess"):console.log("login fail");
      if(username.current.value==="Ratan" & password.current.value==="Ratan@123"){
        dispatch(login(username.current.value))
        navigate('/home');
      }
      else{
        alert("Your Credentials are wrong.check Once!");
      }
    }
     return(
        <>
        <h2>Login form</h2>
        <label> Username :</label>
        <input type="text" ref={username}/>
        <br/> <br/>

        <label> Password: </label>
        <input type="password" ref={password}/>
         <br/> <br/>
       <button style={{backgroundColor:"green"}}
       onClick={Logincheck}>Login</button>
        </>
    )
}
export default Login;