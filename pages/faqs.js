import styles from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import { getPostFaq } from '../lib/resizeimage'
import {React,useState} from 'react'
import {Typography,Box,Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Navigate from '../components/navigation';
import Myfooter from '../components/footer2';
import style from '../styles/alignment.module.css'

export async function getStaticProps(){

  const postFaq = await getPostFaq()
  return {
    props:{
      postFaq
    }
  }
}

function Fcontent(props){
  const [state,setState] = useState(false);
  return (
    <Stack direction='row' spacing={3} mb={1} ml={2} pt={3}>
       { !state && <AddIcon className={style.imagegroup} onClick={()=>{setState(true)}}/>}

       { state && <CloseIcon className={style.imagegroup} onClick={()=>{setState(false)}} />}
        <Box>
          <Typography className={`${style.size0002} ${style.timesplus}`} onClick={()=>{setState((prev)=>{return (!prev)})}}>{props.question}</Typography>

          {state && <Typography className={style.size2} sx={{width:'70%'}}>
              Every month. If you pledge for Issue 01 only, this will be sent to you in December 2019. 
              If you sign up for 12 Issues, you will receive one each month, ending next November 2020.
          </Typography>}
        </Box>
      </Stack>)
}

export default function Home({postFaq}) {


  return (
    <div >
    <Myheader Your_name='Chinonso morba' page="first page" key={43} />

    <Sidemenu key={44} />
    <Navigate allyPropsNum={9} key={45}>
      <Box sx={{bgcolor:'white',ml:{xs:1,sm:5,md:9}}} mt={9} mb={5} pb={2}>
      <Typography className={style.size4} sx={{textAlign:'center'}}>Frequently Asked Questions</Typography>
        {postFaq.map((item,index)=><Fcontent question={item} />)}
      </Box>

      <Box className={styles.back} />

      <Myfooter key={46} />
    </Navigate>
    </div>
  )
}

