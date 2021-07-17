import { Card, CardContent, makeStyles  } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Card>
               <CardContent>
                   <h2>Create, Read, Update, Delete Application.....</h2>
               </CardContent>
           </Card>
        </div>
    )
}

export default Home
