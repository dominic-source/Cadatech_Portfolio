import React from 'react';
import {Grid,Box,Typography} from '@mui/material'
import style from '../styles/alignment.module.css'


// @function This function is used to style text and make it look good
export function Customtext(props){

    return(
        <div style={{width:'212px',color:'#24231F',paddingTop:'50px'}}>
            <Typography  
                sx={{lineHeight:1.5}} 
                className={style.sizei}>
            {props.content2}
            </Typography> 

            <Typography 
                sx={{lineHeight:1.5, mt:2}} 
                className={style.sizee} 
                >
            {props.content3}
            </Typography>
        </div>)}


// @function This function is a resusable component function, 
// @description it takes argument(props) such as content1,content2,content3 and image
//              the 'leading' prop shows determines if the text content or the image will precede the other.
export default function Gridimagetext(props){

return(
    // @description     Grid,Box and Typography are all MUI (Material User Interface) react components
    <Grid container pb={4} pt={4} sx={{p:{xs:1,sm:3,md:9}}}>
        <Grid item xs={12} sm={10} md={6}>
            {props.leading =='text'||props.leading==null?
                <Box >
                    <Typography 
                        sx={{lineHeight:1, pb:4}} 
                        className={style.sizej} 
                        >
                    {props.content1}
                    </Typography>

                    <Typography 
                        sx={{lineHeight:1.5}} 
                        className={style.sizeh}>
                    {props.content2}
                    </Typography> 

                    <Typography 
                        sx={{lineHeight:2.5, mt:2}} 
                        className={style.sizee} 
                        >
                    {props.content3}
                    </Typography>
                </Box>:props.image
            }
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
            {props.leading =='image'?
              <Box>
                <Typography 
                    sx={{lineHeight:1, pb:4}} 
                    className={style.sizej} 
                   >
                {props.content1}
                </Typography>
              
                <Typography 
                    sx={{lineHeight:1.5}} 
                    className={style.sizeh}>
                {props.content2}
                </Typography> 
              
              <Typography 
                    sx={{lineHeight:2.5, mt:2}} 
                    className={style.sizee} 
                    >
                {props.content3}
                </Typography>
                </Box>:props.image
            }
        </Grid>
    </Grid>)
}