// import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {getPostData} from '../lib/resizeimage';
import {Grid,Typography,Box,Stack,Divider} from '@mui/material';
import Image from 'next/image'
import stylescampaign from '../styles/campaign.module.css'
import Navigate from '../components/navigation';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';
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
    <div>
    <Myheader Your_name='Chinonso morba' page="first page" key={6} />
    <Sidemenu key={7} />
    <Navigate allyPropsNum={6} key={8}>
{postData.map((item,index)=>{
  return(
    <div className={stylescampaign.pledge} style={{color:'#24231F',position:'relative'}}>

    <hr className={`${styles.hr2} ${stylescampaign.posit}`}/>

    {/* This is the "Featured" and "No more available component" */}
      {index%2?<Stack direction='row' spacing={1} className={stylescampaign.pledgeimportant} sx={{bgcolor:'#08d9d6',m:{xs:2,sm:3}}}>
        <StarBorderIcon sx={{fontSize:'30px',color:'white'}} />

        <Stack direction='column-reverse' className={styles.sizeb}>Featured</Stack>
      </Stack>:

      <Stack direction='row' spacing={1} className={stylescampaign.pledgeimportant} sx={{bgcolor:'#F878B9',m:{xs:2,sm:3}}}>
        <CloseIcon sx={{fontSize:'30px',color:'white'}} />

        <Stack direction='column-reverse' className={styles.sizeb}>NO MORE AVAILABLE!</Stack>
      </Stack>}

      {/* The image for each prop */}
      <Grid container>
      <Grid item xs={12} sm={6} md={3}> <Image src={"/images/" + item.name} width={234} height={234} /> </Grid>

      <Grid item xs={12} sm={6} md={9}>
        <div className={stylescampaign.pledgecontent}>
            <span className={styles.sizej}>{item.id+(item.id*3.25)}$</span>&nbsp;<span  className={styles.sizej}>or more</span><br/>

            <div className={styles.sizee}>British pounds</div>

            <div className={`${styles.sizef} ${stylescampaign.pledgecontentadj}`}>{item.title}</div>

            <div className={`${styles.sizec} ${stylescampaign.pledgecontentmain}`}>{item.content}</div>
        </div>
      
        <div className={stylescampaign.pledgefooter}>
            <Divider orientation="vertical" variant="middle" flexItem sx={{mr:3}} />

            <div>
              <Typography className={styles.sizec}>
                {item.id} Backers
              </Typography>
              
              <Typography className={styles.sizef}>
              {item.id}/100 available
              </Typography>
            </div>

            <Divider orientation="vertical" variant="middle" flexItem sx={{mr:3}} className={stylescampaign.pledgefootercontent2}/>
            
            <div >
              <Typography className={styles.sizec}>
              International shipping: + £2
              </Typography>
              
              <Typography className={styles.sizec}>
              Estimated delivery: Dec 2019
              </Typography>
            </div>
        </div>
      </Grid>
      </Grid>
    </div>
  )
})}
    
    <Myfooter key={9}/>
    <Box className={styles.back} />
    </Navigate>
    </div>
  )
}

