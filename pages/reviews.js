import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {getPostData} from '../lib/resizeimage';
import {useEffect,useState} from 'react';
import {Typography,Box,Grid} from '@mui/material';
import Navigate from '../components/navigation';
import stylescampaign from '../styles/campaign.module.css'
import Video from '../components/video';
import Myfooter from '../components/footer2'
import {Apostrophy2} from '../components/apostrophy';
import styles from '../styles/alignment.module.css'

export async function getStaticProps(){
  const postData = await getPostData();

  return {
      props:{
          postData
      }
  }
}
export default function Home({postData}) {

  const [state,setState] = useState(0)
  useEffect(() =>{
      window.addEventListener('load',()=>{
          window.matchMedia('(max-width:1023px)').matches?setState(300):setState(400)
      });
      
      window.addEventListener('resize',() =>{
       window.matchMedia('(max-width:1023px)').matches?setState(300):setState(400)
      });
      
      window.matchMedia('(max-width:1023px)').matches?setState(300):setState(400)
    },[]);
        
  return (
    <div>
    <Myheader Your_name='Chinonso morba' page="first page" key={8} />
    <Sidemenu key={9} />
    <Navigate allyPropsNum={8} key={10}>
      <Grid container>
        <Grid item xs={12} sm={6} md={8}>
          <Video width={state} height={state} key={23}/>
        </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Box color="#24231F" sx={{width:'250px',pl:2, marginTop:'15%',pb:2,minHeight:'200px'}}>
          <hr className={styles.hr2}/>
          
          <Typography  component="h5" sx={{mt:1}} className={styles.size3}>Creative Director</Typography>
          
          <Typography  sx={{mt:1,mb:2}} className={styles.size4}>Zoe Charlton</Typography>
          
          <Typography sx={{mt:2}} className={styles.size01}>⭐⭐⭐⭐⭐&nbsp;<small>5/5</small></Typography>
          
          <Apostrophy2 key={22}>
          Simple and truly effective. A no-brainer purchase, that will be a pleasure to receive each month.
          </Apostrophy2>
          
          <Typography sx={{mt:1,fontStyle:'italic'}} className={styles.size01}>
          Zoe is Founder and Creative Director, based in New York City.</Typography>
        </Box>
</Grid>
      </Grid>
      <Grid container pl={5} mt={9} spacing={2} mb={3}>
        <Grid item md={4} sm={8} xs={10} sx={{position:'relative',width:'214px'}} pt={4}  >
          <div>
            <img src='/images/Mask Group 25@2x.png' width={214} height={214} />
            <hr className={`${styles.hr2} ${stylescampaign.posit}`}/>
          </div>

          <Apostrophy2 key={21}>
            Simple and truly effective. A no-brainer purchase, that will be a pleasure to receive each month.
          </Apostrophy2>

          <Typography sx={{mt:1,fontStyle:'italic'}} className={styles.size01}>@adobeclouds.com</Typography>
        </Grid>

        <Grid item md={4} sm={8} xs={10} sx={{position:'relative',width:'214px'}} pt={4}  >
          <div>
            <img src='/images/Mask Group 23@2x.png' width={214} height={214} />
            <hr className={`${styles.hr2} ${stylescampaign.posit}`}/>
          </div>

          <Apostrophy2 key={20}>
            Simple and truly effective. A no-brainer purchase, that will be a pleasure to receive each month.
          </Apostrophy2>

          <Typography sx={{mt:1,fontStyle:'italic'}} className={styles.size01}>@adobeclouds.com</Typography>
        </Grid>

        <Grid item md={4} sm={8} xs={10} sx={{position:'relative',width:'214px'}} pt={4}  >
          <div>
            <img src='/images/Mask Group 24@2x.png' width={214} height={214} />
            <hr className={`${styles.hr2} ${stylescampaign.posit}`}/>
          </div>

          <Apostrophy2 key={19}>
            Simple and truly effective. A no-brainer purchase, that will be a pleasure to receive each month.
          </Apostrophy2>

          <Typography sx={{mt:1,fontStyle:'italic'}} className={styles.size01}>@adobeclouds.com</Typography>
        </Grid>
      </Grid>
      
    <Myfooter key={11} />

    </Navigate>
        </div>
  )
}

