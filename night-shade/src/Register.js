import { useRef, useState,useEffect } from "react";
import { faCheck, faTimes, faInfoCircle
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX= /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register =()=>

{
    const userRef= useRef();
    const errRef=useRef();

    const[user, setUser]=useState('');
    const[validName, setValidName]=userState(falsee);
    const[userFocus, setUserFocus]=userState(false);

    const[pwd, setPwd]=useState('');
    const[valipwd, setValidPdw]=userState(falsee);
    const[pwdFocus, setPwdFocus]=userState(false);

    const[matchPwd, setMatchPwd]=useState('');
    const[validMatch, setValidMatch]=userState(falsee);
    const[matchFocus, setMatchFocus]=userState(false);

    const[errMsg, setErrMsg]=useState('');
    const[success, setSuccess]=useState('');

    useEffect(()=>{
        useRef.current.focus();
    }, [])
    
    useEffect(()=>{
        const result=USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);


    }, [user])

    useEffect(()=>{
        const result=PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPdw(result);
        const match=pwd==matchPwd;
        setValidMatch(match);
    }, [pwd,matchPwd])

    return(
        <div>

        </div>
    )
}

export default Register