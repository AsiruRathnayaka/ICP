import React from 'react';
import { AppBar, Toolbar, Typography, Button,  Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../../Assets/Logo 1.png'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: 'rgba(0.1, 0.24, 0.35, 0.5)',
      backdropFilter: 'blur(8px)'
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img width="70%" src={Logo} alt='Logo'></img>
            </div>
        <div>
          <Button
            color="inherit"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleMenu}
          >
            Nav Item 1
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Typography variant="body1">Dropdown Item 1</Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="body1">Dropdown Item 2</Typography>
            </MenuItem>
          </Menu>
          <Button color="inherit">Nav Item 2</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
