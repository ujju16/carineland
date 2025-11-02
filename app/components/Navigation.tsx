'use client'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  { name: 'Accueil', path: '/', icon: <HomeIcon /> },
  { name: 'À Propos', path: '/about', icon: <InfoIcon /> },
  { name: 'Galerie', path: '/gallery', icon: <PhotoLibraryIcon /> },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const pathname = usePathname()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: 'primary.main' }}>
        Carineland
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              component={Link}
              href={page.path}
              selected={pathname === page.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  },
                },
              }}
            >
              <Box sx={{ mr: 2, display: 'flex' }}>{page.icon}</Box>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                flexGrow: isMobile ? 1 : 0,
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                fontFamily: 'Lora',
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              Carineland
            </Typography>

            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    href={page.path}
                    startIcon={page.icon}
                    sx={{
                      my: 2,
                      color: pathname === page.path ? 'primary.main' : 'text.primary',
                      display: 'block',
                      mx: 1,
                      fontWeight: pathname === page.path ? 600 : 400,
                      borderBottom: pathname === page.path ? 2 : 0,
                      borderColor: 'primary.main',
                      borderRadius: 0,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                component={Link}
                href="/admin"
                sx={{
                  color: pathname === '/admin' ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <AdminPanelSettingsIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
