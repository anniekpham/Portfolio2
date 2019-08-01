import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import file from '../../APResume.pdf'

const ITEM_HEIGHT = 48;

const Navbar = _ => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

      const classes = useStyles();
    return (
        <nav className="navbar">
            <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        aria-label="More"
                        aria-controls="long-menu"
                        aria-haspopup="true"                       
                        onClick={handleClick}
                        >
                    <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 6,
                                width: 250,
                                marginTop: 53.5
                            },
                        }}
                        >
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration= {500}
                            onClick={handleClose}
                            >
                            <MenuItem className="navlink">Home</MenuItem>
                        </Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration= {500}
                            onClick={handleClose}
                            >
                            <MenuItem className="navlink">About</MenuItem>
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration= {500}
                            onClick={handleClose}
                            >
                            <MenuItem className="navlink">Projects</MenuItem>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration= {500}
                            onClick={handleClose}
                            >
                            <MenuItem className="navlink">Contact</MenuItem>
                        </Link>
                        <a href={file} target = "_blank">
                            <MenuItem className="navlink">Resume</MenuItem>
                        </a>

                    </Menu>
                </Toolbar>
            </AppBar>
            </div> 
        </nav>
    )
}

export default Navbar