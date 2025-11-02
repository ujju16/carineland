'use client'

import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EnergyBadgeIcon from '@mui/icons-material/EnergySavingsLeaf'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionPaper = motion.create(Paper)

export default function AboutPage() {
  return (
    <Box component="main" role="main" sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Box
        component="header"
        aria-label="En-tête de la page À Propos"
        sx={{
          background: 'linear-gradient(135deg, #4a7c2a 0%, #2d5016 100%)',
          color: 'white',
          py: 10,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h2" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
              À Propos de Carineland
            </Typography>
            <Typography variant="h5" component="p" sx={{ opacity: 0.9 }}>
              L'histoire d'une passion pour la nature et l'artisanat
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={6} component="article" aria-label="Informations sur Carineland">
          <Grid item xs={12} md={6}>
            <Box component="section" aria-labelledby="notre-histoire">
              <MotionPaper
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                elevation={2}
                sx={{ p: 4, height: '100%' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mr: 2 }} aria-hidden="true">
                    <NaturePeopleIcon sx={{ fontSize: 32 }} />
                  </Avatar>
                  <Typography variant="h4" component="h2" id="notre-histoire" sx={{ fontWeight: 600 }}>
                    Notre Histoire
                  </Typography>
                </Box>
              <Typography variant="body1" paragraph>
                Carineland est né d'une passion profonde pour la nature et les créations artisanales.
                Chaque pièce est conçue avec soin, utilisant des éléments naturels soigneusement
                sélectionnés.
              </Typography>
              <Typography variant="body1">
                Le lierre, élément central de nos créations, symbolise la fidélité et l'éternité.
                Nous travaillons avec respect et admiration pour ces matériaux que la nature nous
                offre.
              </Typography>
              </MotionPaper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="section" aria-labelledby="notre-passion">
              <MotionPaper
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                elevation={2}
                sx={{ p: 4, height: '100%' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 60, height: 60, mr: 2 }} aria-hidden="true">
                    <FavoriteIcon sx={{ fontSize: 32 }} />
                  </Avatar>
                  <Typography variant="h4" component="h2" id="notre-passion" sx={{ fontWeight: 600 }}>
                    Notre Passion
                  </Typography>
                </Box>
              <Typography variant="body1" paragraph>
                Chaque création est unique et faite avec amour. Nous croyons que la beauté réside
                dans l'authenticité et l'imperfection naturelle de chaque élément.
              </Typography>
              <Typography variant="body1">
                Notre mission est de ramener un peu de la magie de la nature dans votre quotidien, à
                travers des pièces décoratives qui racontent une histoire.
              </Typography>
              </MotionPaper>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box component="section" aria-labelledby="engagement-ecologique">
              <MotionPaper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                elevation={3}
                sx={{
                  p: 5,
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'success.main', width: 70, height: 70 }} aria-hidden="true">
                    <EnergyBadgeIcon sx={{ fontSize: 36 }} />
                  </Avatar>
                </Box>
                <Typography variant="h3" component="h2" id="engagement-ecologique" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                  Engagement Écologique
                </Typography>
                <Typography variant="h6" component="p" sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}>
                  Nous nous engageons à utiliser exclusivement des matériaux naturels et durables,
                  récoltés dans le respect de l'environnement. Chaque création est éco-responsable et
                  contribue à préserver la beauté de notre planète.
                </Typography>
              </MotionPaper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
