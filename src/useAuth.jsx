import {useState} from 'react';

export default function useAuth (initialvalue){
const [auth,setAuth]=useState(initialvalue)

function login(){
    setTimeout(()=>{
        setAuth(true)
    },1500)
}

function logout(){
    setTimeout(()=>{
        setAuth(false)
    },1500)
}

return [auth,login,logout]

}