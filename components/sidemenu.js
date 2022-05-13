import { Typography,Box,Card,CardActions,CardContent,Button,Stack } from '@mui/material';
import {styled} from '@mui/material/styles'
import {React,useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import alignStyles from '../styles/alignment.module.css'
import stylesnew from '../styles/news.module.css'

// @description A modified button to fit requirements
const Newbutton = styled(Button)({
boxShadow:'none',
backgroundColor:"#08d9d6",
width:'270px',
height:'45px',
fontSize:'15px',
fontWeight:'bold',
marginRight:'auto',
marginLeft:'auto',
marginBottom:'10px',
'&:hover': {
    backgroundColor: '#C6F904',
  },
  '&:active': {
    backgroundColor: '#C6F904',
  },
  '&:focus': {
    backgroundColor: '#C6F904',
  },
  borderRadius:0,
})

export default function Sidemenu(){
  const [state,setState] = useState(null);

//To cause a custom effect on the change
useEffect(() =>{
            
  window.addEventListener('load',(event)=>{
      setState(window.matchMedia('(max-width:1023px)').matches)
  });
  
  window.addEventListener('resize',(event) =>{
    setState(window.matchMedia('(max-width:1023px)').matches)
  });
  
  setState(window.matchMedia('(max-width:1023px)').matches)
},[]);



// This side menu is for the left hand side of the page. 
  return (<>
    {!state && <div className={alignStyles.leftsidemenu} style={{backgroundColor:'#24231F'}}>
      <div className={alignStyles.image}>
        <Image src='/images/whute1.png' alt="upside down weirdo" arial-label="company logo called weirdo" width={200} height={100} />
      </div>

      <Card 
          sx={{ maxWidth: '309.49px',maxHeight:'514.78px',bgcolor:'#3D3C38',m:1}} 
          className={stylesnew.auto}
      >
        <CardContent>
          <Stack direction="row" spacing={3} sx={{mb:2}}>
            <Typography 
                sx={{ fontSize: 10,fontWeight:'bold', opacity:0.6 ,mr:4}} 
                color="white"> 
              CURRENTLY LIVE ON 
            </Typography>

            <Image height={12.83} width={159} src='/svg/crowdfundry.svg'/>
          </Stack>

          <Image height={193.5} width={278} src='/svg/cocumberside.svg' />

          <Typography 
              sx={{ mb: 1.5, color:'white', fontSize:'42px' }}> 
            ₤4875 
          </Typography>

          <div 
            style={{backgroundColor:'#000000', width:'282px', height:'12px',borderRadius:'10px'}}
          >
              <div style={{width:'129.36px', height:'6px',borderRadius:'3px', backgroundColor:'#08d9d6',position:'relative',top:'3px',left:'6.61px'}}></div>
          </div>

          <Typography 
              variant="overline" 
              sx={{fontSize:'11px',fontWeight:'bold', mr:'100px',color:'white',opacity:0.7}}>
            PLEDGED OF $10,000
          </Typography>         

          <Typography 
              variant="overline" 
              sx={{fontSize:'11px',fontWeight:'bold',color:'white',opacity:0.7}}>
            48% FUNDED
          </Typography> 

          <Box>
            <hr style={{width:'21px',marginLeft:0,display:'inline-flex',opacity:0.2}}/>

            <hr style={{width:'21px',marginLeft:0,display:'inline-flex',opacity:0.2, marginLeft:'170px'}}/>
          </Box>

          <Box  sx={{color:'white'}}>
            <Typography 
                 variant='h4' 
                 sx={{display:'inline',fontSize:'30px',fontWeight:'bold',marginRight:'5px'}}>
               {548}
             </Typography>

            <Typography 
                 variant='h6' 
                 sx={{display:'inline',fontSize:'10px',fontWeight:'bold',opacity:0.7}}>
               BACKERS
             </Typography>

            <Typography 
                 variant='h4' 
                 sx={{display:'inline',fontSize:'30px',fontWeight:'bold',marginLeft:'100px',marginRight:'5px'}}>
               {14}
             </Typography>

            <Typography 
                 variant='h6' 
                 sx={{display:'inline',fontSize:'10px',fontWeight:'bold',opacity:0.7}}>
               DAYS TO GO
             </Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Link href='#'>
            <Newbutton variant='contained' >
              Order it now &gt;&gt; 
            </Newbutton>
          </Link>

        </CardActions>
      </Card>

      
    </div>}
    </>)
}



    