import Link from 'next/link'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// @function this will return an inline flex of the facebook, twitter and whatsapp icon.
export default function Socialicon(){

    return(<>
                <span>
                    <Link href='https://'>
                      <FacebookOutlinedIcon fontSize='small' color='#24231F' sx={{mr:2,'&:hover':{fontSize:25}}} />
                    </Link>
                </span>

                <span>
                    <Link href='https://'>
                      <TwitterIcon fontSize='small' color='#24231F' sx={{mr:2,'&:hover':{fontSize:25}}} />
                    </Link>
                </span>

                <span>
                    <Link href='https://'>
                      <WhatsAppIcon fontSize='small' color='#24231F' sx={{mr:2,'&:hover':{fontSize:25}}} />
                    </Link>
                </span>
    </>)
}