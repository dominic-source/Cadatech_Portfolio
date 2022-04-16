import {Box,Stack,Typography,Button} from '@mui/material'
import Link from 'next/link'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Socialicon from './socialicons';
import styles from '../styles/alignment.module.css'

// @function    The Myfooter function is used to render items at every page, however,
//              it will still be included as a component into every page where it is needed
// @description The Box,Typography,Stack and Button component are all MUI react components. 
export default function Myfooter(){

    return(<>
        <Box sx={{maxHeight:'150px',bgcolor:'#DFE9BA',}} >
            <Link href="/goals">
                    <Button variant='outlined' endIcon={<DoubleArrowIcon />} sx={{ml:{xs:1,sm:5,md:'40%'},mt:'4%',mb:3}} className={styles.size02}>
                    Order it now</Button>
            </Link>
        </Box>
        <Stack sx={{ml:'27px',pt:'29.42px'}} direction='column'>
        <Link href='https://wa.me/message/Q727P5NKPSPMJI'>
          <Typography 
              sx={{fontSize:'10px',fontWeight:'bold'}}>
            CONTACT US
          </Typography>    
        </Link>
          <Typography variant='overline' sx={{fontSize:'13px', fontWeight:'bold'}}>
            cadatechnonso@gmail.com
          </Typography>
        <span>
          <Socialicon key={7}/>
        </span>
      </Stack>
</>
    )
}