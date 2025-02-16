import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';



const CustomeAppBar = () => {
  const drawerWidth = 240;
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled((props: AppBarProps) => <MuiAppBar {...props} />, {
    shouldForwardProp: (prop: string) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <>
         <AppBar position="fixed" open={open}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: 'none' }),
            }}
            {open ? ? <InboxIcon /> : <MailIcon />}
          >
          </IconButton>
            <MenuIcon />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default CustomeAppBar