import { getParamData, getPostData, getPostId } from '../../lib/resizeimage';
import Myheader from '../../components/myheader'
import Sidemenu from '../../components/sidemenu'
import React from 'react'
import {Grid,Typography,Box,Button} from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/alignment.module.css'
import stylesnews from '../../styles/news.module.css'
import Image from 'next/image'
import Navigate from '../../components/navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Gridimagetext from '../../components/gridimagetext'
import Myfooter from '../../components/footer2'


export async function getStaticProps({params}){
    const postData = await getPostData();
    const [postParam] = await getParamData(params.id)
    return {
        props:{
            postData,
            postParam
        }
    }
}

export async function getStaticPaths(){
    const paths = getPostId();
    return{
        paths,
        fallback:false
    }
}

export default function Home({postData,postParam}) {
 
  return (
    <div>
        <Myheader Your_name='Chinonso morba' page="first page" />
        <Sidemenu></Sidemenu>
        <Navigate allyPropsNum={4}>
    <Image src={'/images/'+ postParam.name} width={942} height={500}/>

    {/* @Read about Gridimagetext in under the component folder */}
    <Gridimagetext 
            image={
                <Box pl={12}>
                    <Image src='/images/Gallery-02@2x.png' width={214} height={214} />

                    <Link href="/campaign">
                        <Button variant='outlined' className={styles.size02} sx={{mt:3}}>
                            See it on Cadatech
                        </Button>
                    </Link>
                </Box>} 
            content1={postParam.title} 
            content2="We did it! After many a month pawing over every detail, we’re finally asking you 
                    to BACK Weirdo!"
            content3='Morbi a neque non ex tincidunt porttitor et eu urna. Praesent feugiat eros ac 
                      lacus luctus, posuere vehicula dolor molestie. Maecenas consectetur dignissim 
                      consectetur.Nullam quis auctor nunc. Pellentesque varius tortor sit amet dictum 
                      laoreet. Donec mollis pellentesque ante, quis congue nibh consectetur vel.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                       anim id est laborum.'
    />

    <Link 
        href="/gallery">
            <Button variant='outlined' className={styles.size02} sx={{ml:9}}>
                Back to all News
            </Button>
    </Link>

    <Grid container className={stylesnews.auto} rowSpacing={5} pt={5} pl={9}>
    {
        postData.map((item,index)=>{
            if(postParam.id < index+1 && index+1 < postParam.id+4){
                return(
                    <Grid item md={3.7} sm={6} xs={12} >
                        <div className={`${stylesnews.auto} ${stylesnews.cardstyle}`}>

                            <hr className={styles.hr2}/>

                            <div style={{width:'214px'}} className={stylesnews.auto}>
                                <img src={'/images/'+ item.name } className={stylesnews.img1} />

                                <Typography mt={3} className={styles.size3}>{item.title}</Typography>

                                <Typography mt={2} className={styles.size01}>{item.content}</Typography>

                                <Link href={'/posts/'+ item.title}>
                                    <Box bgcolor='#24231F' color='white' mt={4} pl={1} 
                                        className={stylesnews.arrowbox}>
                                            <span>More </span>

                                            <span style={{paddingLeft:'70px'}}><ArrowForwardIcon /></span>
                                    </Box>
                                </Link>
                            </div>

                        </div>
                    </Grid>)
            }
      })
    }
      
    
    </Grid>
    
    <Box className={styles.back} />
    <Myfooter />
</Navigate>
    </div>

  );
}

