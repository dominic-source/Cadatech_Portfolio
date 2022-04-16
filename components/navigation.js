import {React,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab,Typography,Box,Stack,List,ListItem,Button,Drawer,ListItemText} from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import {styled} from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import _ from 'lodash'
import styles from '../styles/alignment.module.css'

// @description A modified Tab
const Tabmodified = styled(Tab)({
    borderTop: 1,
    borderColor: 'divider',
    fontSize:'13px',
    '&.Mui-selected':{
        color:'black'
    },
});

// @description A modified Tabs
const Tabsmod = styled(Tabs)({
    '& .css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#24231F',
    },
});

// @description Another modified Tab
const Tabhome = styled(Tab)({
    minWidth:'48px',
    borderTop: 1,
    borderColor: 'divider',
    fontSize:'13px',
    '&.Mui-selected':{
        color:'black'
    }
});


// @function the TabPanel function returns a Box and a Typography contain children elements
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div  role="tabpanel"  hidden={value !== index}  id={`simple-tabpanel-${index}`}  aria-labelledby={`simple-tab-${index}`}  {...other} >
      {value === index && (
        <Box sx={{ p: 0 }}> <Typography>{children}</Typography>  </Box>)}
    </div>
  );
}

// The PropTypes are used to declare the types for each props although it is not necessary very important
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


// @function this function is used to return attribute to be used as props for another function
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


// @description The Navigate function is used in all the pages and it is very essential for each page.
export default function Navigate({children,allyPropsNum}) {
  const [value, setValue] = useState(allyPropsNum);
  const [state, setState] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, changeState] = useState(null);

  //To cause a custom effect on the change
  useEffect(() =>{
              
    window.addEventListener('load',(event)=>{
        setState(window.matchMedia('(max-width:1023px)').matches)
    });
    
    window.addEventListener('resize',(event) =>{
      setState(window.matchMedia('(max-width:1023px)').matches)
    });
    
    setState(window.matchMedia('(max-width:1023px)').matches)
  },[]);


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    changeState(open);
  };

  const list = () => (
    <Box
      sx={{ width:200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List onChange={handleChange} >
        {['Home','Overview','Gallery','Team','News','Campaign','Goals','Reviews','Faqs',].map((textitem,index) => (
          <ListItem button {...a11yProps(allyPropsNum)} >
          <ListItemText secondary>
            <Link href={textitem==='Home' ? '/': `/${_.lowerCase(textitem)}`}>{textitem}</Link>
          </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>{!state ? <div className={styles.navigation}>
     <Stack direction='row' spacing={49} sx={{pt:1,pl:1}}>
        <Typography 
            sx={{color:'#24231F'}} 
            className={styles.size1}> 
          WHAT'S WEIDO?
        </Typography>

        <Typography 
            sx={{color:'#24231F'}} 
            className={styles.size1}> 
          WHY WE'RE FUNDING
        </Typography>
      </Stack>

      <Box>
        <Box sx={{pl:1}}>
          <Tabsmod value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Link href='/'>
              <Tabhome 
                  icon={<Image width={14.48} height={13.69} src='/svg/homeIcon.svg' />} 
                  {...a11yProps(allyPropsNum)} 
                  sx={{borderTop: 1,borderColor: 'divider'}}
              />
            </Link>
            {['Overview','Gallery','Team','News','Campaign','Pledges','Goals','Reviews','Faqs'].map((textitem,index) => (
              <Link href={`/${_.lowerCase(textitem)}`}>
              <Tabmodified 
                  label={textitem} 
                  {...a11yProps(allyPropsNum)} 
                  sx={{borderTop: 1,borderColor: 'divider'}}
              />
            </Link>
            ))}
          </Tabsmod>
        </Box>

        <TabPanel value={value} index={allyPropsNum} key={12}> {children}
        </TabPanel>
      </Box>
  </div>:<><Button onClick={toggleDrawer(true)} sx={{zIndex:20}}><MenuIcon fontSize='large' /></Button>
         {/* This is the drawer that will be shown when the menu icon is clicked */}
          {change && <Drawer
            anchor='left'
            open={change}
            onClose={toggleDrawer(false)}
          >
          <Button onClick={toggleDrawer(false)}><CloseIcon /></Button>
            {list()}
          </Drawer>}
<Box>
<TabPanel value={value} index={allyPropsNum} key={13}>{children}
        </TabPanel>

</Box>
      </>}</>
  );
}