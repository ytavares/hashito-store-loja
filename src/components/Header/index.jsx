import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { MenuLink } from './Header.styles';
import logo from '../../public/images/logo2.png';

const pages = ['Inicio', 'Contato'];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: '#FFF', top: 0, left: 0, zIndex: 99999 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              height: '90px',
              padding: '10px',
            }}
          >
            <img src={logo} alt="" />
          </Box>

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
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              marginLeft: '-110px',
            }}
          >
            <MenuLink
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'http://google.com';
              }}
              sx={{ my: 2, color: '#ffa1a1', display: 'block' }}
            >
              Início
            </MenuLink>
            <MenuLink
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'http://google.com';
              }}
              sx={{ my: 2, color: '#ffa1a1', display: 'block' }}
            >
              Contato
            </MenuLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
