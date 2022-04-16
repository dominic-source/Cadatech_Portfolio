import {useEffect,useState} from 'react'
import {Typography,Box,Grid} from '@mui/material'
import styles from '../styles/alignment.module.css'
import Newhrtext from './newhrtext'
import Image from 'next/image'
import stylesnews from '../styles/news.module.css'
import PropTypes from 'prop-types';


export default function Cardhorver({children,direction, captionLeft,
                                    imageAddressName,cardWidth,cardHeight,
                                    pl,imageWidth,imageHeight,text1,text2,text3})
        
                                    {

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
        return (<div className={styles.right_side_below}>
          <Grid container>
            {state && <Grid item xs={12} sm={6} md={6}>
            {captionLeft && children}

            </Grid>}
            <Grid item xs={12} sm={6} md={6}>
            <Box 
                sx={{
                      minWidth:cardWidth ||'280px',
                      minHeight:cardHeight||'290px',
                      p:2,
                      ml:{xs:1,sm:3,md:9},
                      mr:{xs:1},
                      mt:3,
                      flexDirection:direction||'row'}} 
                bgcolor='#24231F' 
                className={styles.card}
            >

              <Image 
                  src={`/images/${imageAddressName || 'mockup-page-02.png'}`} 
                  width={imageWidth || 292} 
                  height={imageHeight || 292} 
              />
              
              <div style={{paddingLeft:pl|| '15px',maxWidth:'230px',minHeight:'230px'}} >
                <Typography variant='h4' sx={{mt:3,mb:2}} className={styles.size4}>{text1}.</Typography>
                
                <hr className={styles.hr1}/>
      
                <Typography variant='button' component="h5" sx={{mt:3,mb:2}} className={styles.size3}>{text2}</Typography>
                
                <Typography variant='caption' component='h6' className={styles.size2} >{text3}</Typography>
              </div>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            {captionLeft || children}
            </Grid>
          </Grid>

            
      </div>

        )
}
