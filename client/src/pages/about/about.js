import React from 'react'
import './about.css'
import Picture from '../../assets/picture.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const About = _ => {
    const classes = useStyles();

    const frontend = ['React', 'Javascript', 'Html', 'API', 'CSS', 'Bootstrap', 'Material-UI']
    const databases = ['MySQL', 'MongoDB', 'Firebase']
    const others = ['Node.js', 'Github']

    return (
        <div id="about">
            <div className="container">
                <h2 className="subtitle">Hello World,</h2>
                <div className="aboutcontainer">
                    <img src={Picture} className="picture" />
                    <p className="abouttext">and welcome to my portfolio! My name is Annie and I am a Full-Stack Web Developer located in Monclair, California. I graduated from Cal State Fullerton with a degree in Business Management. However, ever since learning how to code I've fell in love with programing and never look back. I am passionate about learning new languages and developing cool new applications that are fun and useful, so I would love to collaborate on new projects!</p>
                    <div className={classes.root} id="maincontainer">
                        <Grid container spacing={3}>
                            <Grid item lg={4} md={6} xs={12} className="gridcontainer">
                            <Paper className={classes.paper}>
                                <p className="programs">Frontend</p>
                                {frontend.map(program => (
                                    <>
                                        <p className="program">- {program}</p>
                                    </>
                                ))}
                            </Paper>
                            </Grid>
                            <Grid item lg={4} md={6} xs={12} className="gridcontainer">
                            <Paper className={classes.paper}>
                                <p className="programs">Database</p>
                                {databases.map(program => (
                                    <>
                                        <p className="program">- {program}</p>
                                    </>
                                ))}
                            </Paper>
                            </Grid>
                            <Grid item lg={4} md={6} xs={12} className="gridcontainer">
                            <Paper className={classes.paper}>
                                <p className="programs">Others</p>
                                {others.map(program => (
                                    <>
                                        <p className="program">- {program}</p>
                                    </>
                                ))}
                            </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About