import React from 'react';
import {Typography} from '@mui/material'
import styles from '../styles/alignment.module.css'


//@function Apostrophy is used to add apostrophies to a defined width of text
//@param the props from where it is used such as the children is used to add 
//  the text content to the component
export default function Apostrophy({children}){
    return (<>
                <img src='/svg/topapostrophy2.svg' alt="top apostrophy" className={styles.apostrophy2} />

                <Typography sx={{fontSize:'30px', fontWeight:'light'}}>
                    {children}
                </Typography>

                <img src='/svg/bottomapostrophy2.svg' alt='apostrophy' className={styles.apostrophy}/>
            </>
    )
}

export function Apostrophy2({children}){
    return (<>
                <img src='/svg/aposT.svg' alt="top apostrophy" className={styles.apostrophy2} />

                <Typography sx={{fontSize:'30px', fontWeight:'light'}}>
                    {children}
                </Typography>

                <img src='/svg/aposB.svg' alt='apostrophy' className={styles.apostrophy}/>
            </>
    )
}