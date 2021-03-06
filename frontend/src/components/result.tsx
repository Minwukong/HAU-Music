import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'; // Button을 import 한다.


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #F333 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });



const Result = () => {
    const classes = useStyles();
    return (

        <div>
            <Button className={classes.root} >
                Hello World
            </Button>

        </div>
       
    );
};

export default Result;

