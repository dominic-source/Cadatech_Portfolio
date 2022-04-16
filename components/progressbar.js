//  A progress bar, may not be appropriate here but may be useful somewhere else 

import {React, useEffect, useState} from 'react';
import stylesnews from '../styles/news.module.css'

export default function Progressbar(){
    const [state, setState] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            if(state == 100){
                setState(()=>{return 0});
                clearInterval();
                console.log(state)
            } else{
                console.log(state)
                setState((prev)=>{
                    return prev +=1
                })
            }
        },80)
    })
       


    return(
      <div className={stylesnews.circular}>
        <div className={stylesnews.inner} ></div>

        <div className={stylesnews.number} >{`${state}%`}</div>

        <div className={stylesnews.circle}>
            <div className={`${stylesnews.bar} ${stylesnews.left}`}>
                <div className={stylesnews.progress}></div>
            </div>

            <div className={`${stylesnews.bar} ${stylesnews.right}`}>
                <div className={stylesnews.progress}></div>
            </div>
        </div>

      </div> 
    )
}
       