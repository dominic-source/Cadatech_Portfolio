import {React} from 'react';
import {Typography, Box} from '@mui/material'
import styles from '../styles/alignment.module.css'

/* 
@function This function takes in props armunent and returns a box which contains well formated text
@param The parameters of the props inclued 'text1' 'text2' and 'text3' 
*/

export default function Newhrtext(props){

    return(<>
    <Box color="#24231F" sx={{maxWidth:'150px',pl:5, marginTop:props.mt||'15%',pb:5,maxHeight:'200px'}}>
    <hr className={styles.hr2}/>
    <Typography variant='h5' sx={{mt:3,mb:2}} className={styles.size4}>{props.text1}</Typography>
    <Typography variant='h6' component="h5" sx={{mt:3,mb:2}} className={styles.size3}>{props.text2}</Typography>
    <Typography variant="subtitle2" sx={{mt:2}} className={styles.size01}>{props.text3}</Typography>
  </Box>
  </>)
  }