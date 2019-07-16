import React from 'react';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './navbar.css'

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

    return (
        <nav className="navbar">
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
                <Link to="/" onClick={handleClose}>
                    <MenuItem>
                            Home
                    </MenuItem>
                </Link>
                <Link to="/About" onClick={handleClose}>
                    <MenuItem>
                            About
                    </MenuItem>
                </Link>
                <Link to="/Projects" onClick={handleClose}>
                    <MenuItem>
                            Projects
                    </MenuItem>
                </Link>
                <Link to="/Contact" onClick={handleClose}>
                    <MenuItem>
                            Contact
                    </MenuItem>
                </Link>
                <Link to="/Resume" onClick={handleClose}>
                    <MenuItem>
                            Resume
                    </MenuItem>
                </Link>
            </Menu>
        </nav>
    )
}

export default Navbar