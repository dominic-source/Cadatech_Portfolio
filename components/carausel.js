import {React,useState,useEffect} from 'react';
import Image from 'next/image'
import {Box} from '@mui/material'
import styles from '../styles/alignment.module.css'


// @function This function returns the a particular child 
//           from the array of child in the children props(argument) based on its state
export default function Carausel({children}){

    const [newstate, changeState] = useState(1);
    
    useEffect(()=>{
        // This setInterval function changes the state of the function every 3 seconds
      setInterval(() => {
        changeState((prev)=>{
            if(prev < 4){
                return prev+1
            }
            else{
                return 1
            }
        })
    }, 3000);
    },[])

    return children.filter((item,index)=>{
      return newstate==index+1 
    })
}
