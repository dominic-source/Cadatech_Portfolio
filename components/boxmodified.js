import {React,useState,useCallback} from 'react';
import {Box,Stack} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import {styled} from '@mui/material/styles'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import SlideshowIcon from '@mui/icons-material/Slideshow';


//  
//@private  'useCallback' is used to implement memoization to store 
//           without repeating the computation but it does not cache 
//           the result 'useMemo' can do that for you... All these, is to reduce re-rendering.


// @description this is a modified MUI box to style it base on preferences
const Boxsx=styled(Box)({
    width:'35px',
    height:'35px',
    paddingLeft:'4.5px',
    paddingTop:'4.5px',
    borderRadius:'7px',
    "&:hover":{
              backgroundColor:'white',
              border:'1px solid #92928f'
            },
    "&:active":{
                backgroundColor:'white',
                border:'1px solid #92928f'
              },
    "&:focus":{
              backgroundColor:'white',
              border:'1px solid #92928f'
  }
  });
  

  
// @function this function component is used to create multiple click views of a an image grid
export default function Boxmodified({children}){
           const [value, setValue] = useState(1);

          //  @function this function changes the state of the Boxmodified to the id
          //  @description This is function was written within this scope because it needs to change state.
          //                Therefore, it is not available globally.
          const Singlebox = ({children,id})=>{
            const handleclick= useCallback(()=>{
              setValue(id);
            },[]) 

            return(
            <Boxsx onClick={handleclick} key={33}>
                {children}
            </Boxsx>)
          }

    return (
    
    <>
      <Stack direction='row' spacing={2} pl={7} pt={4} >
        <Singlebox  id={1} key={34} >
            <AppsIcon color='action' sx={{fontSize:'30px'}}/>
        </Singlebox>

        <Singlebox id={2} key={35}>
            <ViewListIcon color='action' sx={{fontSize:'30px'}} />
        </Singlebox>

        <Singlebox id={3} key={36}>
            <ViewCarouselIcon color='action' sx={{fontSize:'30px'}}/>
        </Singlebox>

        <Singlebox id={4} key={37}>
            <SlideshowIcon color='action' sx={{fontSize:'30px'}}/>
        </Singlebox>
      </Stack>

      {/* @description  This filter method is used to filter 
                        out the children with the item that 
                        has index equal to that of the Boxmodified */}
      {children.filter((item,index)=>{
             return value==index+1 
      })}
    </>)}
  