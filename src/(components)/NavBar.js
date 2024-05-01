'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpwork } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    icon: GitHubIcon,
    url: "https://github.com/tyren-r",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/tr95/",
  },
];

const pages = [
  {
    text:'Home',
   link: "/"
  }, 
   {
    text:'Projects',
    link: '/projects-list'
  },
  ];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{backgroundColor:'black', minHeight:'7vh',  flexGrow: 0,flexShrink: 0}} position="static">
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page.text} href={page.link} style={{textDecoration: 'none',color: 'white'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow:1, alignItems:'center', justifyContent:'space-between' }}>
              <Box sx={{display:'flex'}}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={page.link}> {page.text}</Link>
              </Button>
            ))}
            </Box>
            <Box sx={{display:'flex'}}>
              {socials.map((website,i) => (
                <MenuItem key={i}  onClick={handleCloseUserMenu}>
                  <a target='_blank' href={website.url}>
                  <website.icon sx={{height:35,width:35, color:'white'}} />
                  </a>
                </MenuItem>
              ))}
              <MenuItem  onClick={handleCloseUserMenu}>
                <a target='_blank' href="https://www.upwork.com/freelancers/~017ef3bb88c40a19f3">
              <FontAwesomeIcon icon={faSquareUpwork} style={{height:33,width:33}}/>
              </a>
              </MenuItem>
              </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;