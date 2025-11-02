'use client'

import { Box, Container, Typography, Link as MuiLink, Grid, Divider } from '@mui/material'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 'auto',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* À Propos */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Lora' }}>
              Carineland
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Créations artisanales à base de lierre et autres éléments de la nature. Chaque pièce
              est unique et faite avec amour.
            </Typography>
          </Grid>

          {/* Liens Rapides */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                href="/"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Accueil
              </MuiLink>
              <MuiLink
                component={Link}
                href="/gallery"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Galerie
              </MuiLink>
              <MuiLink
                component={Link}
                href="/about"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                À Propos
              </MuiLink>
            </Box>
          </Grid>

          {/* Légal */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Informations Légales
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                href="/legal/mentions-legales"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Mentions Légales
              </MuiLink>
              <MuiLink
                component={Link}
                href="/legal/politique-confidentialite"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Politique de Confidentialité
              </MuiLink>
              <MuiLink
                component={Link}
                href="/legal/cookies"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Gestion des Cookies
              </MuiLink>
              <MuiLink
                component={Link}
                href="/legal/rgpd"
                sx={{ color: 'white', textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                RGPD
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
            © {currentYear} Carineland - Tous droits réservés
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            Créé avec <FavoriteIcon sx={{ fontSize: 16, color: '#ff6b6b' }} /> par{' '}
            <MuiLink
              href="https://github.com/ujju16"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white', fontWeight: 600 }}
            >
              @ujju16
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
