import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import { getPostData } from '../lib/resizeimage'
import {Typography,Box,Grid} from '@mui/material';
import Link from 'next/link'
import stylesnews from '../styles/news.module.css'
import Navigate from '../components/navigation';
import Myfooter from '../components/footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '../styles/alignment.module.css'

export async function getStaticProps(){
  const postData = await getPostData()
  return {
    props:{
      postData
    }
  }
}

export default function Home({postData}) {
  return (
    <div>
    <Myheader Your_name='Chinonso morba' page="first page" key={4} />
    <Sidemenu key={5} />
    <Navigate allyPropsNum={4} key={6} >

<Grid container sx={{ pt:5,pl:{xs:0,sm:3,md:9},position:'relative'}}>
<Box className={styles.back} />
{
  postData.map((item,index)=>{
    return(
      <Grid item md={3.7} sm={6} xs={12} mt={0} key={index+1}>
        <div className={`${stylesnews.auto} ${stylesnews.cardstyle}`}>
          <hr className={styles.hr2}/>

          <div style={{maxWidth:'214px'}} className={stylesnews.auto}>
              <img src={'/images/'+ item.name } className={stylesnews.img1} />

              <Typography mt={3} className={styles.sizeh}>{item.title}</Typography> 

              <Typography mt={2} className={styles.sizec}>{item.content}</Typography>

              <Link href={'/posts/'+ item.title}>
                  <Box bgcolor='#24231F' color='white' mt={4} pl={1} className={stylesnews.arrowbox}>
                    <span>More </span>
                    <span style={{paddingLeft:'70px'}}><ArrowForwardIcon /></span>
                  </Box>
              </Link>
          </div>

        </div>
      </Grid>
  )})
}
</Grid>
<Myfooter key={7} />
</Navigate>
    </div>
  )
}

