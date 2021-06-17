import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Typography, createMuiTheme, AppBar } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';


const useStyles = makeStyles({

  root:{
    height: "100%",
    width: "100%",
    background: "black"
  },

  text: {
    color: "white",
  },

});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});



const Result=()=> {
  const classes = useStyles();
  return (
    
  <>

    <ThemeProvider theme={theme}>
      <CssBaseline />
            <Typography style={{marginTop:50}}className={classes.text}>안녕 난 민준이</Typography>
            <Typography className={classes.text}>안녕 난 민준이</Typography>
            <Typography className={classes.text}>안녕 난 민준이</Typography>
          <AppBar  color="inherit">
            <Typography variant="h6" className={classes.text}>앙 기모띠~</Typography>   
          </AppBar>
          <AudioPlayer
    autoPlay
    src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </ThemeProvider>
  </>
  );
}


export default Result;