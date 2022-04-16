import {React} from 'react';
import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {getPostData} from '../lib/resizeimage';
import {Typography,Box,Grid} from '@mui/material';
import stylescampaign from '../styles/campaign.module.css'
import Image from 'next/image'
import Navigate from '../components/navigation';
import Myfooter from '../components/footer2';
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
  return (
    <div >
    <Myheader Your_name='Chinonso morba' page="first page" key={7}/>
    <Sidemenu key={8} />
    <Navigate allyPropsNum={7} key={9}>
    {postData.map((item)=>{
  return(
    <div className={stylescampaign.pledge2} style={{color:'#24231F',position:'relative'}}>
    <Box className={styles.back} />

    <hr className={`${styles.hr2} ${stylescampaign.posit}`}/>

      {/* The image for each prop */}
    <Grid container className={styles.goals} p={3}>
      <Grid item xs={12} sm={10} md={6} sx={{borderRight:'2px solid #08d9d6'}}>
        <div >
            <div className={styles.size2}>If we reach</div>

            <span className={styles.size6}>£{item.id*9025}</span>


            <div className={`${styles.size4} ${stylescampaign.pledgecontentadj}`}>{item.title}</div>

            <div className={styles.size2} style={{minWidth:'235px'}}>{item.content}</div>
        </div>
      
        <div>
   
            <Typography className={styles.size01} sx={{pt:{xs:2,sm:4,md:6}}}> Estimated delivery: Dec 2019 </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={10} md={6} sx={{position:'relative',mr:{xs:5,sm:0,md:0},pl:{xs:0,sm:2,md:4}}} >
        <Image src='/svg/pattern.svg' width={250} height={250} />
        <img src='/svg/cloth.svg' className={stylescampaign.cloth}/>
        <div className={`${stylescampaign.votedesign} ${styles.size3}`}>Vote on the design</div>
      </Grid>
    </Grid>

    </div>
  )
})}
    
    <Myfooter key={10} />
    </Navigate>
    </div>
  )
}

