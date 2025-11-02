'use client'

import { Box, Container, Typography, Grid, Card, CardContent, Button, Fab } from '@mui/material'
import { motion } from 'framer-motion'
import NatureIcon from '@mui/icons-material/Nature'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

const features = [
  {
    icon: <NatureIcon sx={{ fontSize: 48 }} />,
    title: 'Nature Authentique',
    description: 'Créations uniques réalisées avec des éléments naturels soigneusement sélectionnés',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 48 }} />,
    title: 'Fait avec Passion',
    description: 'Chaque pièce est conçue avec amour et attention aux détails',
  },
  {
    icon: <StarIcon sx={{ fontSize: 48 }} />,
    title: 'Pièces Uniques',
    description: 'Des créations artisanales qui apportent une touche unique à votre décor',
  },
]

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2d5016 0%, #4a7c2a 100%)',
          color: 'white',
          py: { xs: 8, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Carineland
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, opacity: 0.95, fontFamily: 'Lora' }}>
              Le Monde de Carine
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Créations artisanales à base de lierre et autres éléments de la nature
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/gallery"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Voir les Créations
              </Button>
              <Button
                component={Link}
                href="/about"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                En Savoir Plus
              </Button>
            </Box>
          </MotionBox>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: 0,
            right: 0,
            height: 100,
            background: 'white',
            clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
          }}
        />
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 8, color: 'primary.main', fontWeight: 700 }}
        >
          Pourquoi Choisir Carineland
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 28px rgba(45, 80, 22, 0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Découvrez Mes Créations
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Explorez la galerie et laissez-vous inspirer par la beauté de la nature
          </Typography>
          <Button
            component={Link}
            href="/gallery"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            Voir la Galerie
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
