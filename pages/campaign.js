import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {React,useEffect,useState} from 'react';
import {Typography,Box,Grid,Stack} from '@mui/material';
import Image from 'next/image'
import stylesnews from '../styles/news.module.css'
import Navigate from '../components/navigation';
import Video from '../components/video'
import Cardhorver from '../components/cardhorver';
import Newhrtext from '../components/newhrtext';
import stylescampaign from '../styles/campaign.module.css'
import Myfooter from '../components/footer2'
import styles from '../styles/alignment.module.css'


export default function Home() {
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


  return (
    <div>
    <Myheader Your_name='Chinonso morba' page="first page" key={42} />
    <Sidemenu key={6} />
    <Navigate allyPropsNum={5} key={7}>
<Image src='/images/campaign.png' width={932} height={346}/>

{/* This div element displays text contents and an svg */}
<div style={{display:'flex',flexDirection:'row-reverse',padding:'50px 0px 30px 100px'}}>

  {state||<img src='/svg/dot.svg' style={{transform:'rotate(90deg)'}} />}

  <div className={stylesnews.adjust}>
    <Typography className={styles.size5} >The ask</Typography>

    <Typography className={styles.size3}>
        Pre-order your first copy of Weirdo, so we can take it into production!
    </Typography>
  </div>
</div>

{/* @description A video components used to play videos.
                Requirements: it requires the width, height and name of the video, 
                default is 750px width, 585px height and name:'Autodesk'   */}
{state||<Video width='750' height='585' name='Autodesk' key={37}/>}

{/* @description This card component adds card to the content, the direction 
                 will default to 'row' if not specified to 'column'
                 It also has a next imageHeight default is 253 and imageWidth default is 292.
                 It has the cardWidth and cardHeight with default of 566px and 298px
                 It also has other attribute or props which shown below
                 */}
<Cardhorver 
    direction='column' 
    captionLeft={!state} 
    imageHeight={181} 
    imageAddressName='mockup-cover-2.png'
    cardWidth='282px'
    cardHeight='412px'
    pl='0px' 
    text1={`It’s just $5.`} 
    text2='That includes post and packaging!' 
    text3='Delivered to your door, every month.'
    key={41}
> 
  {state||<Box sx={{display:'flex',flexDirection:'column'}}>
    <div style={{ maxWidth:'370px',maxHeight:'137px',marginTop:'18px',marginLeft:'95px'}} className={`${styles.flexrow} ${styles.size2}`}>
          Weirdo is a photography zine at it’s core, think simple high-level concepts – 
          paired with your tea break – for when you JUST need that little spark of an idea, or 
          a way to pivot in another direction.
          Simple. Effective. And looks great in your home.
    </div>
    <Grid container mt={9} className={styles.flexrow}>
      <Grid item md={6} sm={10} xs={10} pl={12}>
        <span style={{width:'136px',height:'136px',position:'relative'}}>
          <img src='/svg/coil2.svg' alt='coiled line' style={{position:'absolute',left:'50%',top:'-150px'}} />
               
          <Image src='/images/wineshape.png' width={136} height={136} />
        </span>    
      </Grid>
               
      <Grid item md={6} sm={10} xs={10} pl={12}> 
        <Newhrtext 
            text1='Monthly' 
            text2={<>No-hassle, <br/> Subscription</>} 
            text3="No contract, you may cancel at any time."
            mt='20%'
            key={6}
        />   
      </Grid>  
    </Grid> 
  </Box>}
</Cardhorver>

{state || <Box sx={{background:'#F5F5F5',pt:4,mt:4,maxHeight:'500px',position:'relative'}}>
  <Typography className={styles.size5} pl={17}>How we'll spend your money</Typography>

  <div className={stylescampaign.allitem} >
    <div className={`${stylescampaign.content} ${stylescampaign.contentadj1}`}>           
      <Newhrtext 
                text2='Core Costs' 
                text3="All Design time is being contributed by us."
                key={7}
            />   
    </div>

    <div className={stylescampaign.content}>
      <Image src='/svg/roundcolors.svg' width={250} height={250}/>
      <div className={`${styles.size4} ${stylescampaign.item}`}>£10,000</div>
    </div>


    {/* Right part */}
    <Stack direction='row' className={stylescampaign.allitem1}>
      <Stack direction ='column' spacing={2} className={stylescampaign.alleachitem} sx={{width:'160px'}}>
        <div className={`${styles.size01} ${stylescampaign.item3}`} style={{width:'160px'}}>£1050</div>
        <div className={`${styles.size01} ${stylescampaign.item3}`} style={{width:'110px',marginLeft:'50px'}}>£200</div>
        <div className={`${styles.size01} ${stylescampaign.item3}`} style={{width:'90px',marginLeft:'70px'}}>£3050</div>
      </Stack>

      <Stack direction ='column' spacing={2} >
        <div className={`${stylescampaign.printing} ${stylescampaign.hewi}`}></div>
        <div className={`${stylescampaign.packaging} ${stylescampaign.hewi}`}></div>
        <div className={`${stylescampaign.advertising} ${stylescampaign.hewi}`}></div>
      </Stack>

      <Stack direction ='column' spacing={2} className={stylescampaign.alleachitem}>
        <div className={`${styles.size002} ${stylescampaign.item1}`}>Printing</div>
        <div className={`${styles.size002} ${stylescampaign.item1}`}>packaging</div>
        <div className={`${styles.size002} ${stylescampaign.item1}`}>Advertising</div>
      </Stack>
    </Stack>
    
   
    {/* Left part */}
    <Stack direction='row' className={stylescampaign.allitem2}>
      <Stack direction ='column' spacing={2} className={stylescampaign.alleachitem}>
        <div className={`${styles.size002} ${stylescampaign.item2}`} >Distribution</div>
        <div className={`${styles.size002} ${stylescampaign.item2}`} >Postage</div>
      </Stack>

      <Stack direction ='column' spacing={2} >
        <div className={`${stylescampaign.distribution} ${stylescampaign.hewi}`}></div>
        <div className={`${stylescampaign.postage} ${stylescampaign.hewi}`}></div>
      </Stack>

      <Stack direction ='column' spacing={2} className={stylescampaign.alleachitem}>
        <div className={`${styles.size01} ${stylescampaign.item4}`} style={{width:'100px'}}>£4150</div>
        <div className={`${styles.size01} ${stylescampaign.item4}`} style={{width:'140px'}}>£1550</div>
      </Stack> 
    </Stack>

    <div className={`${stylescampaign.content} ${stylescampaign.contentadj2}`}>
      <Newhrtext 
                text3="Based on quotes valid until December 2019, inc. 5% Contingency."
                key={8}
            />   
    </div>
  </div>
</Box>}
    <Myfooter key={5} />
</Navigate>
    </div>
  )
}
