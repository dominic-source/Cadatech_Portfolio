import Myheader from '../components/myheader'
import Sidemenu from '../components/sidemenu'
import {useState,useEffect} from 'react';
import {Typography,Box,Grid} from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import Navigate from '../components/navigation';
import Gridimagetext,{Customtext} from '../components/gridimagetext';
import Myfooter from '../components/footer';
import Apostrophy from '../components/apostrophy';
import Cardhorver from '../components/cardhorver';
import Newhrtext from '../components/newhrtext';
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
    <Myheader Your_name='Chinonso morba' page="first page" key={1} />
    <Sidemenu key={2} />
     {/* @file the component was imported from the Navigation.js file */}
 {/* @function the component helps to wrap up the document */}
    <Navigate allyPropsNum={1} key={3}>

      {/* A responsive Next js image */}
      <Image src='/images/Mask_Group_10.png' width={942.53} height={330} />

      {/* This is MUI component, read about the doc */}
      <Box className={styles.overview} >
        <Image src='/svg/coiledline.svg' height={13.04} width={135.79}  />
      </Box>

{/* @description Gridimagetext takes in image and text to returns it in a Grid format.
    @params the Gridimagetext is a component that takes in atleast 4 props for component argument
  */}
      <Gridimagetext 
          image={<Image src='/images/mockup-cover-2.png' width={370} height={370} />} 
          content1='Beatifully simple' 
          content2='An afforable monthly zine, offering visual 
          stimulation and creative inspiration.'              
          content3='Weirdo is a photography zine at it’s core, think simple high-level concepts 
                  – paired with your tea break – for when you JUST need that little spark of an idea, 
                  or a way to pivot in another direction.Simple. Effective. And looks great in your home.'
          leading='text'
          key={18}
      />

     {state|| <img src='/svg/dot.svg' alt="beautiful dots" className={styles.dot} /> }

      {/* This is MUI component, read about the doc */}
     {state || <Grid container mb={0}>

          <Grid container item md={3} pl={9}>
            <Grid item md={12}>
              <Image src='/images/Spoon.png' width={136} height={371} />
            </Grid>

            <Grid item md={12} sx={{pl:4}}>
              <Image src='/images/Donuts.png' width={72.84} height={20.67} />
            </Grid>
          </Grid>

          <Grid container item md={4} >
            <Grid item md={12}>
              <Image src='/images/Hand.png' width={214} height={214} />
            </Grid>

            <Grid item md={12}>
              <Image src='/images/Toy.png' width={292} height={193} />
            </Grid>
          </Grid>

          <Grid container item md={4} p={5} pt={10}>
              <img src='/svg/topapostrophy.svg' alt="top apostrophy" className={styles.apostrophy2} />

              <Typography 
                  sx={{fontSize:'30px', fontWeight:'light'}}>
                      I’m not looking for Instagram perfection… 
                      I want to flick through metaphors, 
                      juxtapositions, colour play…
                </Typography>

              <img src='/svg/bottomapostrophy.svg' alt='apostrophy' className={styles.apostrophy}/>
          </Grid>
    </Grid>}

{/* An image contained in a div */}
   { state || <div className={styles.pos_img}>
        <Image src='/images/colorshape.png' width={136} height={136} />
    </div>}

    <Box sx={{pl:{xs:1,sm:3,md:9},pr:{xs:1,sm:2},mt:2}}>
      <Typography className={styles.size5} >A shift in the norm</Typography>

      <Image  src='/images/Mask_Group_4.png' width={780} height={250}/>
    </Box>

    {/* This is MUI component, read about the doc */}
    <Grid container sx={{p:{xs:1,sm:3,md:9}}}>
      <Grid item xs={12} sm={12} md={6} pr={3}>
        <Typography  
            sx={{lineHeight:1.5}} 
            className={styles.size3}>
            Sometimes all we need is a slight shift of mindset 
            to transform an idea, from good… to great.
        </Typography>
        
        <Typography  
            sx={{lineHeight:2.5}} 
            className={styles.size2}>
                The team here at Weirdo got just a little overwhelmed 
                by all the great, and immersive imagery out there. 
                They come from a generation that didn’t grow up with 
                Instagram, with Stock image sites, fffound, or even with Flickr… 
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Typography 
            sx={{lineHeight:2.5}} 
            className={styles.size2}>
                …so when great imagery became mainstream they found themselves 
                addicted to scrolling, spent hours down rabbit warrens, hashtag 
                to hashtag – and as “AMAZING” as it was… they were left deflated. 
                “Everyone is a photographer now… how do we ensure our creative 
                output can still remain unique?”
        </Typography>
        <Typography sx={{lineHeight:1.5}} className={styles.size3}>
                By taking it back to theory. And let’s give it an END. 
                Let’s make it physical again. 
            </Typography>
        </Grid>
    </Grid>

    {/* images for styling */}
   {state || <img src='/svg/coil2.svg' className={styles.coil} />}

    {/* A dark colored horizontal card  */}
    <Cardhorver 
          text1={<>The best bit? <br/> It’s just $5</>} 
          text2='Yep, really!' 
          text3='P&P included and delivered to your door, every month!'
          direction={state? 'column':'row'}
          key={17}
    >
      <Newhrtext 
                text1='Monthly' 
                text2={<>No-hassle, <br/> Subscription</>} 
                text3="No contract, you may cancel at any time."
                mt='15%'
                key={16}
                  />     
    </Cardhorver>

    <Image src='/images/Mask_Group_6.png' width={978} height={292} />

    <Gridimagetext 
        image={<>
                <Newhrtext text3="Our natural bleaching process is 100% safe to our environment."/>

                {state ||<><img src='/images/colorshape.png' className={styles.img2} />

                <img src='/images/colorshape2.png' className={styles.img3} /></>}
                </>}
        content1="And that's not all" content2='We give back to the environment.'     
        content3={<p>We strongly believe in businesses being responsible for their 
            environmental and social impact.<br/>
            All of the paper stock that we print on, and the envelopes we use 
            for postage are 100% recycled. The 
            zine is printed on (surprisingly) bright white – 
            naturally bleached – stock, to ensure that quality feel.</p>}
        leading='text'
        key={15}
    />

    <Gridimagetext 
        image={<Image src='/images/charity-childdotorg.png' width={292} height={292} />} 
        content2={`We share our profits with child.org`}      
        content3={<p>Child.org beleive that every child deserves an equal opportunity if 
            life – and so do we. <br/>For every penny of profit Weirdo makes <b>we donate 20% of it to Child.org</b>. These profits 
            directly help young children across Kenya – enabling reliable nutrition and ensuring education.</p>}
        leading='image'
        key={14}
    />

    <Typography 
        variant="overline" 
        component="div" 
        sx={{textAlign:'center'}} >
            Check out 
            <Link href='/'><a><b>Child.org</b></a></Link> 
            to see how they make a real difference.
    </Typography>

    {state ||<img src='/images/colorshape3.png' className={styles.img4} />}

    <Box 
        sx={{mt:{xs:1,sm:2,md:5},p:{xs:1,sm:3},position:'relative'}}>
            <Image src='/images/Mask_Group_13.png' width={942} height={399} />
            {state || <Box sx={{position:'absolute',width:'214px', height:'120px',top:'150px',ml:9}} color='white'>
                <Apostrophy key={13}>
                    Concept is often lost in todays
                </Apostrophy>
            </Box>}
    </Box>

    <Box 
        sx={{display:'inline-flex',mt:{xs:1,sm:2,md:7},p:{xs:1,sm:3}}}>
           {state ||<span className={styles.ls}>
              <Image src='/images/blackspoon.png' width={136.36} height={285} />
            </span>}

            <span className={styles.ls}> 
                <Customtext 
                    content2='Concepts.' 
                    content3='Creative block can happen more often than we’d like it to. 
                        Whether you need a concept for a colour scheme, an advertising campaign, or a 
                        logo mark – we hope that our simple zine will offer you a way out. '
                        key={12}
                        />
            </span>

            {state || <><img src='/svg/zigzag.svg' alt='zigzag'/>

            <span> 
              <span className={styles.img5}>           
                  <Image src='/images/wineseed.png' width={214} height={200}/>
              </span>

              <Image src='/images/wineshape.png' width={136} height={136} />
            </span></>}
    </Box>

    <Box sx={{display:'inline-flex',mt:{xs:1,sm:2,md:10},p:{xs:1,sm:3}}}>
    {state ||<span className={styles.ls}>
            <Image src='/images/stonewater.png' width={293} height={285} />
          </span>}

          <span className={styles.ls}> 
          <Customtext content2='Ls.' content3={<>A high-level concept, or an image alone, 
            is often all we need – to help us create.<br/><br/>
            It may seem SUPER simplified… but hey, we did a good lot of research 
            and user testing to ensure it works. </>} 
              key={11}
            />
          </span>
          {state || <span className={styles.lt}>
            <img src='/svg/coiledline.svg' alt='coiled line' style={{transform:'rotate(90deg)',position:'relative',left:'100px'}} />
            <Image src='/images/colorshape.png' width={136} height={136} />
          </span>}
    </Box>

    <Box 
        sx={{display:'inline-flex',mt:{xs:2,sm:2,md:7},p:{xs:1,sm:3}}}>
           {state || <span className={styles.ls}>
              <Image src='/images/octopus.png' width={448} height={285} />
            </span>}

           <span className={styles.ls}>

              <Customtext 
                  content2='Concepts.' 
                  content3={<>Quickly testing your needs, or the beginnings of an 
                      idea, against a handful of high-level concepts – 
                      allows to to be more open-minded, and can result in a <b>much</b> 
                      better idea than what you started with.</> }
                        key={10}
                      />
          </span>
    </Box>
    <Myfooter key={7} />
</Navigate>
    </div>
  )
}
