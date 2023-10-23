import * as React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Menu } from "@mui/material";
import { MenuItem, Container, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

// import { useState } from "react";

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const public_pages = ["home", "about", "bookshelf"];

const signedOut = ["login", "register"]



export default function Navbar() {

  const [auth, setAuth] = React.useState(true);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };


  return (
    // <>
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>


    <AppBar position="static">
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="#navbar"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >Check Meowt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {public_pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink key={page} to={page}>{page}</NavLink>
                </MenuItem>
              ))}

              {signedOut.map((p) => (
                <MenuItem key={p} onClick={handleCloseNavMenu}>
                  <NavLink key={p} to={p}>{p}</NavLink>
                </MenuItem>
              ))}


            </Menu>
          </Box>

          <Typography variant="h5" noWrap component="a" href="#smaller-screen-nav"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >Check Meowt
          </Typography>

          {/* this is the list of public_pages */}

            {/* { isVisible ? (  */}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              {public_pages.map((page) => (
              <NavLink
                key={page}
                to={page}
                onClick={handleCloseNavMenu}
                style={({ isActive, isPending }) => {
                  return { marginInlineStart: '2rem', fontWeight: isActive ? "bold" : "", color: isPending ? "green" : "white", };
                }}
              >
                {page}
              </NavLink>
            ))}
            {signedOut.map((p) => (
              <NavLink key="" to={p} style={({ isActive, isPending }) => {
                return { marginInlineStart: '2rem', fontWeight: isActive ? "bold" : "", color: isPending ? "green" : "white", };
              }} > {p}
              </NavLink>
            ))}

            </Box>

{/*             // ) : ( 

            // <> </> 

            // ) }
             */}



          {/* right hand side button */}
          
          {auth && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="myself" onClick={handleCloseUserMenu}>
                <NavLink key="profile" to="/about">profile</NavLink>
                </MenuItem>
                <MenuItem key="mybooks" onClick={handleCloseUserMenu}>
                  <NavLink key="bookshelf" to="/bookshelf">my books</NavLink>
                </MenuItem>
              </Menu>
            </Box >
          )}


        </Toolbar>
      </Container>
    </AppBar>
    </Box>
    // {/* </> */}

  )
}