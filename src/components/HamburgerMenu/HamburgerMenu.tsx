'use client';

import { CancelIcon, HamburgerMenuIcon, ProfileIcon } from '@/Icons/NotificationIcon';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../assets/fontbolt.png';

interface HamburgerMenuProps {
  setOpen: (value: boolean) => void;
  setOpenSignup: (value: boolean) => void;
  userId: string | false | null;
}

// Define Menu Pages
const PAGES = [
  { name: 'Log in', href: '', visibleFor: 'loggedOut', action: 'login' },
  { name: 'Sign up', href: '', visibleFor: 'loggedOut', action: 'signup' },
  { name: 'Profile', href: '/profile', visibleFor: 'loggedIn' },
  { name: 'Settings', href: '/settings', visibleFor: 'loggedIn' },
  { name: 'Sign out', href: '/sign-out', visibleFor: 'loggedIn' },
  { name: 'Help', href: '/help', visibleFor: 'always' },
  { name: 'Contact', href: '/contact', visibleFor: 'always' },
];

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ setOpen, setOpenSignup, userId }) => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleDrawerToggle = (isOpen: boolean) => () => {
    setDrawerOpen(isOpen);
  };

  const handleAction = (action?: string) => {
    if (action === 'login') {
      setOpen(true);
      setOpenSignup(false);
    } else if (action === 'signup') {
      setOpen(false);
      setOpenSignup(true);
    }
    handleMenuClose();
  };

  const getFilteredPages = () => {
    return PAGES.filter(({ visibleFor }) => {
      if (visibleFor === 'loggedIn') return !!userId;
      if (visibleFor === 'loggedOut') return !userId;
      return true;
    });
  };

  const renderDrawerContent = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle(false)}
      onKeyDown={handleDrawerToggle(false)}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex h-[50px] w-[150px] items-center justify-between md:w-[250px]">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-contain"
          />
        </div>
        <CancelIcon className="cursor-pointer" />
      </div>
      <Divider />
      <List>
        {getFilteredPages().map(({ name, href, action }, index) => (
          <React.Fragment key={name}>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAction(action);
                }}
              >
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
            {index === 2 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const renderMenuContent = () => (
    <Menu
      anchorEl={menuAnchorEl}
      open={Boolean(menuAnchorEl)}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&::before': {
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
        },
      }}
    >
      {getFilteredPages().map(({ name, href, action }, index) => (
        <React.Fragment key={name}>
          <MenuItem
            component="a"
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleAction(action);
            }}
          >
            {name}
          </MenuItem>
          {index === 2 && <Divider />}
        </React.Fragment>
      ))}
    </Menu>
  );

  return (
    <>
      {!isMobile ? (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <div
            className={`flex cursor-pointer items-center gap-3 rounded px-3 py-2 duration-300 ease-in-out ${
              menuAnchorEl ? 'bg-[#C3D4E9]' : 'hover:bg-[#C3D4E9]'
            }`}
            onClick={handleMenuOpen}
          >
            <HamburgerMenuIcon />
            <ProfileIcon />
          </div>
          {renderMenuContent()}
        </Box>
      ) : (
        <>
          <Button
            onClick={handleDrawerToggle(true)}
            sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <HamburgerMenuIcon />
            <ProfileIcon />
          </Button>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle(false)}
          >
            {renderDrawerContent()}
          </Drawer>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
