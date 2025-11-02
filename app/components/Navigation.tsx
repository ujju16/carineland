'use client'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
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
import Image from 'next/image'
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
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
      role="navigation"
      aria-label="Menu mobile"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <Image 
          src="/logo.png" 
          alt="Logo Carineland" 
          width={60} 
          height={60}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <List component="nav" aria-label="Pages principales">
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              component={Link}
              href={page.path}
              selected={pathname === page.path}
              aria-label={`Naviguer vers ${page.name}`}
              aria-current={pathname === page.path ? 'page' : undefined}
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
              <Box sx={{ mr: 2, display: 'flex' }} aria-hidden="true">
                {page.icon}
              </Box>
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
        component="nav"
        role="navigation"
        aria-label="Navigation principale"
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
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component={Link}
              href="/"
              aria-label="Carineland - Retour à l'accueil"
              sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                flexGrow: isMobile ? 1 : 0,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo Carineland"
                width={50}
                height={50}
                priority
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>

            {!isMobile && (
              <Box
                component="nav"
                role="navigation"
                aria-label="Menu principal"
                sx={{ flexGrow: 1, display: 'flex', ml: 4 }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    href={page.path}
                    startIcon={page.icon}
                    aria-label={`Naviguer vers ${page.name}`}
                    aria-current={pathname === page.path ? 'page' : undefined}
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
                aria-label="Accéder à l'administration"
                aria-current={pathname === '/admin' ? 'page' : undefined}
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
        id="mobile-navigation-drawer"
        aria-label="Menu de navigation mobile"
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
