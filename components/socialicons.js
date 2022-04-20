import Link from 'next/link'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Stack} from '@mui/material';


// @function this will return an inline flex of the facebook, twitter and whatsapp icon.
export default function Socialicon(){

    return(<>
                <Stack direction='row' spacing={2} mb={3}>
                    <Link href='https://'>
                      <FacebookOutlinedIcon  color='#24231F' sx={{mr:2,'&:hover':{fontSize:30}, fontSize:25}} />
                    </Link>

                    <Link href='https://'>
                      <TwitterIcon color='#24231F' sx={{mr:2,'&:hover':{fontSize:30}, fontSize:25}} />
                    </Link>
               
                    <Link href='https://'>
                      <WhatsAppIcon color='#24231F' sx={{mr:2,'&:hover':{fontSize:30}, fontSize:25}} />
                    </Link>
                </Stack>
    </>)
}