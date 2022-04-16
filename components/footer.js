import {Box,Stack,Typography,Button} from '@mui/material'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import Socialicon from './socialicons';
import styles from '../styles/alignment.module.css'


// @function    The Myfooter function is used to render items at every page, however,
//              it will still be included as a component into every page where it is needed
// @description The Box,Typography,Stack and Button component are all MUI react components. 
export default function Myfooter(){
    const [state, setState] = useState(null);

    useEffect(() =>{
                  
        window.addEventListener('load',(event)=>{
            setState(window.matchMedia('(max-width:1023px)').matches)
        });
        
        window.addEventListener('resize',(event) =>{
          setState(window.matchMedia('(max-width:1023px)').matches)
        });
        
        setState(window.matchMedia('(max-width:1023px)').matches)
      },[]);
  
  
    return(
        <Box sx={{maxWidth:'781px',height:'130px',pl:{xs:2,sm:6,md:9},pt:3}} >
            <Typography className={styles.size4}>
                Next up...
            </Typography>

            <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 4 }} sx={{pt:3}}>
                <Link href="/gallery">
                    <Button variant='outlined' className={styles.size02}>Gallery</Button>
                </Link>

                <Link href="/team">
                    <Button variant='outlined' className={styles.size02}>The Team</Button>
                </Link>

                <Link href="/campaign">
                    <Button variant='outlined' className={styles.size02}>Funding Campaign</Button>
                </Link>
            </Stack>

            {state || <img src="/images/colorshape3.png" 
            width={390} height={113} 
            style={{position:'relative',bottom:'90px',left:'200px',zIndex:'-1'}}/>}
            <Stack sx={{ml:'27px',pt:'29.42px'}} direction='column'>
        <Link href='https://wa.me/message/Q727P5NKPSPMJI'>
          <Typography 
              variant="overline" 
              sx={{fontSize:'10px',fontWeight:'bold'}}>
            CONTACT US
          </Typography>    
        </Link>
        <Typography variant='overline' sx={{fontSize:'13px', fontWeight:'bold'}}>
          cadatechnonso@gmail.com
        </Typography>

        <span>
          <Socialicon key={7} />
        </span>
      </Stack>
        </Box>
    )
}