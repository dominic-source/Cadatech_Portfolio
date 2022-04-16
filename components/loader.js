//  A loader, may not be appropriate here but may be useful somewhere else 

import React from 'react';
import stylesnews from '../styles/news.module.css'

export default function Loadercreated(){

    return(
      <div className={stylesnews.spin}>
        <div className={stylesnews.spinningloader} ></div>
      </div> 
    )
}
       