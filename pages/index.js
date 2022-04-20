import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import Image from 'next/image'
import Carausel from '../components/carausel'
import Navigate from '../components/navigation';
import {Grid, Typography,Stack,Button} from '@mui/material'
import Myfooter from '../components/footer2'
import Link from 'next/link'
import styles from '../styles/alignment.module.css'

export default function Home() {
  return (
    <div>
    <Myheader Your_name='Chinonso morba' page="first page" key={0} />
    <Sidemenu key={1} />
    <Navigate allyPropsNum={0} key={2} >
  {/* @description These images will be displayed one at a time */}
  <div  className={styles.backphoto}>

  <Grid container sx={{p:{xs:2,sm:4,md:7}}}>
    <Grid item xs={12} sm={6} md={6} pt='5%' >
          <div className={styles.backdrip}>
              <Stack spacing={2} sx={{maxWidth:'300px', pl:{xs:3,sm:4,md:5}}}>
                  <Typography className={styles.sizej} color='white'>Dominic<br/>
                   Full Stack Web Developer - Frontend and Backend Development
                   </Typography> 
                   <Typography variant='h6' color='white'>Welcome to cadatech, ready to help you build your business online. </Typography>
              </Stack>
              <Link href='https://wa.me/message/Q727P5NKPSPMJI'>
                <Button variant='contained' sx={{mt:3, ml:{xs:3,sm:4,md:5}}} className={styles.sizec}>Contact me</Button>
              </Link>
          </div>
    </Grid>

    <Grid item xs={12} sm={6} md={6} sx={{pt:{xs:4,sm:3,md:0},pl:{xs:4,sm:3,md:0}}}>
            <img src='/images/chinonso.jpg' className={styles.imgchin}/>
    </Grid>
  </Grid>
{/* Next Grid container */}
  <Grid container sx={{p:{xs:2,sm:4,md:7}}} spacing={2}>
    <Grid item xs={12} sm={4} md={4}  className={styles.backdrip2} sx={{m:{xs:1,sm:3,md:3},ml:{xs:4,sm:3,md:3}}}>
          <Typography  className={styles.sizej}>Design</Typography>
          <Typography className={styles.sizec}>Designs are made for our customers, our deliverables are superb.</Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4}  className={styles.backdrip2} sx={{m:{xs:1,sm:3,md:3},ml:{xs:4,sm:3,md:3}}}>
          <Typography className={styles.sizej}>Branding</Typography>
          <Typography className={styles.sizec}>You are our priority in all phases of your project</Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4} className={styles.backdrip2} sx={{m:{xs:1,sm:3,md:3},ml:{xs:4,sm:3,md:3}}}>
          <Typography  className={styles.sizej}>Product design</Typography>
          <Typography className={styles.sizec}>Working with cadatech ensures retention of your customers</Typography>
    </Grid>
  </Grid>

  </div>
    <Carausel key={3}>
      <div>
        <Image src='/images/mockup_cover_1.png' width={942} height={725} />

        <span className={styles.img}>
          <Image src='/svg/image1.svg' width={99} height={15} />
        </span>
      </div>
      
      <div>
        <Image src='/images/mockup_cover_2.png' width={942} height={725} />

        <span className={styles.img}>
          <Image src='/svg/image2.svg' width={99} height={15} />
        </span>
      </div>
      
      <div>
        <Image src='/images/mockup_cover_3.png' width={942} height={725} />

        <span className={styles.img}>
          <Image src='/svg/image3.svg' width={99} height={15} />
        </span>
      </div>
      
      <div>
        <Image src='/images/mockup-page-02.png' width={942} height={725} />
        
        <span className={styles.img}>
          <Image src='/svg/image4.svg' width={99} height={15} />
        </span>
      </div>
    </Carausel>
    <Myfooter key={4} />
  </Navigate>
    </div>
  )
}
