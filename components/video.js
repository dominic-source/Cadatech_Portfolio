import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Replay30Icon from '@mui/icons-material/Replay30';
import Replay5Icon from '@mui/icons-material/Replay5';
import Forward30Icon from '@mui/icons-material/Forward30';
import Forward5Icon from '@mui/icons-material/Forward5';
import {useState,useEffect} from 'react';
import {Stack} from '@mui/material';
import stylesnews from '../styles/news.module.css'

export default function Video(props){
    const [mainVideo,setVideo] = useState(true)

    const [visibility, setVisibility] = useState(true)
  
    const [state, setState] = useState(true)
  
    useEffect(()=>{
      const video = document.getElementById(`video${props.id}`||'videoT');
  
      let main = document.getElementById(props.id ||'main');
  
      setVideo(main);   
      
    // @description these listeners changes the state of the play and pause button
      main.addEventListener('play',()=>{
        setState(false)
      })

      main.addEventListener('pause',()=>{
        setState(true)
      })

      // @description This are mouse events to set the visibility of all the video control buttons
      video.addEventListener('mouseenter',()=>{
        setVisibility(true)
      })
  
      video.addEventListener('mouseleave',()=>{
        if(main.paused){
          setVisibility(true)
        }
  
        else if (!main.paused){
          setVisibility(false)
        }
  
      })
  
   },[])
    
    return(
            <div id={`video${props.id}` || 'videoT'}  style={{width:`${props.width}px`,height:`${props.height}px`,marginLeft:'auto',marginRight:'auto'}}>
           
            {/* @description This is the video jsx element. 
                             This part of the code is for our video program */}
            <div className={stylesnews.video}>
                <video 
                       controls = {props.val || true}
                       poster={ `/images/${props.poster ||'mockup-page-02.png'}`}
                       width= {props.width ||'750px'} 
                       height={props.height|| '585px'}  
                       autopictureinpicture='true' 
                       preload='metadata'
                       id='main'>
                   <source src={`/videos/${props.name||'Autodesk'}.webm`} type="video/webm" />

                   <source src={`/videos/${props.name|| 'Autodesk' }.mp4`} type="video/mp4"/>

                   <p>Your browser doesn't support HTML5 video. Here is a

                   <a href="myVideo.mp4">link to the video</a> instead.</p>
                 </video>

                 {/* @description These are the video control buttons necessary for a good user experience */}
                 {visibility && <Stack className={stylesnews.polymorph} direction='row' spacing={1} 
                                         sx={{width:props.width/2,left:props.width/4,bottom:props.width/4}}>
                                   <Forward30Icon 
                                       onClick={()=>{mainVideo.currentTime += 30}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>

                                   <Forward5Icon   
                                       onClick={()=>{mainVideo.currentTime += 5}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>

                                   { state || <PauseIcon      
                                       onClick={()=>{mainVideo.pause();setState(true);}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>}

                                   {state && <PlayCircleFilledWhiteOutlinedIcon 
                                       onClick={()=>{mainVideo.play();setState(false)}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>}

                                   <Replay30Icon   
                                       onClick={()=>{mainVideo.currentTime -= 30}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>

                                   <Replay5Icon  
                                       onClick={()=>{mainVideo.currentTime -= 5}} className={stylesnews.play} sx={{fontSize:props.width/13}}/>
                                   </Stack> 
                 }
              </div>
    </div>
    )
}
