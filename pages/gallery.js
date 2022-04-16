import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {getPostData} from '../lib/resizeimage';
import {useState,useEffect} from 'react';
import {Typography,Box,Grid} from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import Navigate from '../components/navigation';
import Myfooter from '../components/footer';
import Boxmodified from '../components/boxmodified';
import styles from '../styles/alignment.module.css'

export async function getStaticProps(){
  const postData = await getPostData();

  return {
      props:{
          postData
      }
  }
}

//Carausel coding, am feeling this carausel❤👌
var default_scroll_value = 0;
const start_scroll_value= 0;
const end_scroll_value = 6720;
const scroll_meter = 550;

// @description This function handles clicks. whenever 
//  there is a click on the back arrow the carousel next backward
function handleMe1(){
  const selector = document.querySelector('.alignment_mita__zxC_6');

      if(default_scroll_value <= scroll_meter){
        selector.scrollTo(start_scroll_value,0)
      }

      else{
         selector.scrollTo(default_scroll_value -= 550,0)
            }    
}

// @description This function handles clicks. whenever 
//  there is a click on the forward arrow the carousel next forward
function handleMe2(){
  const selector = document.querySelector('.alignment_mita__zxC_6');

    if(default_scroll_value + scroll_meter >= end_scroll_value){
      selector.scrollTo(end_scroll_value,0)
    }

    else{
       selector.scrollTo(default_scroll_value += 550,0)
          }    
}

// @description it is the content of the gallery page
// @function This function uses props from the gallery pages directory and 
//  utilizes this props for the content of the gallery
export default function Home({postData}) {

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
        <Myheader Your_name='Chinonso morba' page="first page" key={47} />
        <Sidemenu key={48} />
        <Navigate allyPropsNum={2} key={2}>
      
      {/* The items in Boxmodified is displayed as the children component 
          in the component itself. see function */}
    <Boxmodified key={9}>

    {/* first view for the gallery images
        @description This is a grid view */}
      <Grid container pl={9} pt={3} pr={3} spacing={2}>
          {
            postData.map((item)=>{

                  return(
                      <Link href='/campaign'>
                        <Grid item xs={10} sm={6} md={4}  pl='3%' pr="3%">
                          <Image src={"/images/" + item.name} width={260} height={260} className={styles.imagegroup} />
                        </Grid>
                      </Link>)
                                              } )
          }
      </Grid>
      
      {/* second view for the gallery images
        @description This is a list view */}
          {
            postData.map((item)=>{

                return(

                  <Box sx={{display:"flex", pl:{xs:2,sm:5,md:9},pt:{xs:5,sm:4,md:3}}} className={styles.flexeffect}>
                    <span>
                      <Image src={"/images/" + item.name} 
                          width={292} 
                          height={292} 
                          className={styles.imagegroup} 
                      />
                    </span>

                    <Box sx={{width:"100%",height:'100%',pl:{xs:2,sm:5,md:9},pr:{xs:2,sm:5,md:9}}}>
                      <Typography 
                          sx={{lineHeight:1, mb:{xs:1,sm:2,md:4}}} 
                          className={styles.size4} 
                          variant="h3">
                            {item.title}
                      </Typography>
                      
                      <hr className={styles.hr2}/>
                      
                      <Typography 
                          variant='caption' 
                          sx={{lineHeight:1.5}} 
                          className={styles.size2}>
                              {item.content}
                      </Typography> 
                      
                      <Typography 
                          sx={{lineHeight:1.5,mt:{xs:2,sm:3,md:5}}} 
                          className={styles.size01} 
                          variant="h5">
                              <b>Photography:</b>
                              {item.photography}
                      </Typography>
                      
                      <Typography 
                          sx={{lineHeight:1.5}} 
                          className={styles.size01} 
                          variant="h5">
                              <b>Design:</b>
                              {item.design}
                      </Typography>
                    </Box>
                  </Box>
                )
              })
        }
        

        {/* Third view for the gallery images
        @description This is a 'carousel click or slide to view' */}
     { state||<div className={styles.mita}>
        <div className={styles.mita3}>
          {
           postData.map((item)=>{

                      return(
                        <img src={"/images/" + item.name} className={styles.imagegroup2} />
                            )
                    })
          }
        </div>

        <img src='/svg/arrowbackward.svg' className={styles.img6} onClick={handleMe1}/>

        <img src='/svg/arrowforward.svg' className={styles.img7} onClick={handleMe2}/>
      </div>}

        {/* last view for the gallery images
        @description This is a carousel play view */}   
      <div className={styles.mita}>
        <div className={styles.mita2}>
          {
           postData.map((item)=>{
                      return(
                        <img src={"/images/" + item.name} className={styles.imagegroup2} />
                            )
                    })
          }
        </div>

      </div>

    </Boxmodified>
{/* This is the background color of the gallery pages */}
    <Box className={styles.back} />

    <Myfooter key={49} />
  </Navigate>
    </div>
  )
}

