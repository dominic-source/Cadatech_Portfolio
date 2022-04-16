import style from '../styles/Home.module.css'
import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Typography,Box} from '@mui/material';
import Image from 'next/image'
import Navigate from '../components/navigation';
import Myfooter from '../components/footer';
import Apostrophy from '../components/apostrophy';
import Gridimagetext from '../components/gridimagetext';
import Socialicon from '../components/socialicons';
import styles from '../styles/alignment.module.css'

const Cardhere = (props)=>{
  return(
    <>
      <div className={styles.cardsubteam}>
          <Apostrophy>{props.idea} </Apostrophy>
      </div>

      <div className={styles.cardcontent}>
        <div className={styles.cardsubcontent}>
          <Typography variant="caption" className={styles.size3}>{props.name}</Typography> 

          <i className={styles.size01}> {props.title} <br/>{props.job} </i>
        </div>

        <Socialicon />
      </div>
    </>
  )
}
Cardhere.propTypes = {
  idea:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  job:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
};

const Side = (props)=>{
  return(
    <Box color="#24231F" sx={{maxWidth:'150px',pl:1,mt:props.mt,pb:5,maxHeight:'200px',pt:props.pt}}>
        <hr className={styles.hr2}/>

        <Typography variant="subtitle2" sx={{mt:2}} className={styles.size01}>
            {props.text}
        </Typography>
    </Box>
  )
}
Side.propTypes = {
  text:PropTypes.string.isRequired
};


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
    <Myheader Your_name='Chinonso morba' page="first page" key={3} />
    <Sidemenu key={4} />
    <Navigate allyPropsNum={3} key={4}>
    <Box sx={{display:"flex",flexDirection:'column'}}>
        <Image src='/images/Mask_Group_23@2x.png' width={942} height={650} />

        <Image src='/images/Mask_Group_24@2x.png' width={942} height={650} />

        {state || <><img src='/svg/coiledline.svg' className={styles.svg1} />

        <img src='/svg/dot.svg' className={styles.svg2} /> </>}
    </Box>

    {state || <><div className={`${styles.cardteam} ${styles.cardteam2}`}>
          <Cardhere 
              idea='I want us to receive creative stuff in the POST again! ' 
              name='Nikki Mengardon' 
              title='Co-Founder, Weirdo' 
              job='Head of Design, Hello marketing' 
              key={30}
          />
    </div>

    <div className={`${styles.cardteam} ${styles.cardteam3}`}>
          <Cardhere 
              idea='A simple, cheap subscription – full of creative goodness. ' 
              name='Jenni Lee Thompson' 
              title='Co-Founder, Weirdo' 
              job='Creative Director, WeDoDesign'
              key={29} />
    </div> </>}

    <Gridimagetext 
      content1='Small but effective.' 
      content2='Weirdo only needs the two of us at the moment, and we hope to stay nimble.'
      content3='We have good partnerships in place, so aside from the concepts and design – 
                we have manufacturing and fulfilment covered. We’re proud of our partners –
                as they too, run eco-friendly businesses, and are socially aware of their impact on our world.'
      image={<div className={styles.imagehr}>
                <Image src='/images/Mask_Group_25@2x.png' width={215} height={215}/> 
                <Side 
                  text='Jenni has a serious collection of Polaroid camera’s
                    and spends a lot of her spare time shooting.'/>
            </div>}
            key={28}
    />

      {state|| <><div className={styles.pos_img2}>
        <Image src='/images/colorshape.png' width={136} height={136} />
      </div>

      <div className={`${styles.imagehr} ${styles.pos_img3}`}>
        <Side 
          text='Nikki is a keen Screen-printer and enjoys  making boring clothes into great ones.'
          key={26}
          />

        <Image src='/images/Mask_Group_26@2x.png' width={214} height={214}/>
      </div>

      <div className={styles.imagehr} style={{paddingLeft:'72px'}}>
        <Image src='/images/henk-mul-606905-unsplash@2x.png' width={370} height={350}/>

        <Side 
        text='Hot off the press, our test runs for the first issue.' pt={37} key={27} />
      </div>

      <div className={styles.pos_img4}>
          <Image src='/images/wineshape.png' width={136} height={136} />
      </div></>}

  <Myfooter key={5} />
</Navigate>

    </div>
  )
}
