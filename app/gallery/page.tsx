'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Stack,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { motion } from 'framer-motion'
import Image from 'next/image'
import creationsData from '../data/creations.json'

const MotionCard = motion.create(Card)

const categories = [
  { value: 'all', label: 'Toutes' },
  { value: 'sculpture', label: 'Sculptures' },
  { value: 'peinture', label: 'Peintures' },
  { value: 'composition', label: 'Compositions' },
  { value: 'mobilier', label: 'Mobilier' },
  { value: 'autre', label: 'Autres' },
]

export default function GalleryPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filteredCreations = creationsData.filter((creation: any) => {
    const matchesSearch =
      creation.title.toLowerCase().includes(search.toLowerCase()) ||
      creation.description.toLowerCase().includes(search.toLowerCase()) ||
      creation.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()))
    const matchesFilter = filter === 'all' || creation.category === filter
    return matchesSearch && matchesFilter
  })

  return (
    <Box component="main" role="main" sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Box
        component="header"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
            Galerie de Créations
          </Typography>
          <Typography variant="h6" component="p" sx={{ textAlign: 'center', opacity: 0.9 }}>
            Découvrez {creationsData.length} créations artisanales inspirées de la nature
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Box 
          component="section"
          aria-label="Filtres de recherche"
          sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <TextField
            placeholder="Rechercher une création..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Rechercher dans les créations"
            inputProps={{
              'aria-label': 'Champ de recherche',
            }}
            sx={{ flexGrow: 1, minWidth: 250 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon aria-hidden="true" />
                </InputAdornment>
              ),
            }}
          />
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, newFilter) => newFilter && setFilter(newFilter)}
            aria-label="Filtrer les créations par catégorie"
            role="radiogroup"
          >
            {categories.map(cat => (
              <ToggleButton 
                key={cat.value} 
                value={cat.value}
                aria-label={`Filtrer par ${cat.label}`}
                role="radio"
                aria-checked={filter === cat.value}
              >
                {cat.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {filteredCreations.length === 0 ? (
          <Box 
            role="status" 
            aria-live="polite"
            sx={{ textAlign: 'center', py: 8 }}
          >
            <Typography variant="h5" color="text.secondary">
              Aucune création trouvée
            </Typography>
          </Box>
        ) : (
          <Grid 
            container 
            spacing={4}
            component="section"
            aria-label={`${filteredCreations.length} créations affichées`}
            role="list"
          >
            {filteredCreations.map((creation: any, index: number) => (
              <Grid item key={creation.id} xs={12} sm={6} md={4} role="listitem">
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  aria-label={`Création: ${creation.title}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image
                      src={creation.imageUrl}
                      alt={creation.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    {creation.featured && (
                      <Chip
                        label="Coup de cœur"
                        color="secondary"
                        size="small"
                        aria-label="Cette création est un coup de cœur"
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                      />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {creation.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {creation.description}
                    </Typography>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }} aria-label="Informations sur la création">
                      <Chip 
                        label={creation.category} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                      />
                      <Chip 
                        label={creation.year} 
                        size="small" 
                        variant="outlined"
                      />
                    </Stack>

                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                      <strong>Matériaux :</strong> {creation.materials.join(', ')}
                    </Typography>
                    
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      <strong>Dimensions :</strong> {creation.dimensions}
                    </Typography>

                    <Stack direction="row" spacing={0.5} sx={{ mt: 2, flexWrap: 'wrap' }} aria-label="Étiquettes">
                      {creation.tags.slice(0, 3).map((tag: string) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          aria-label={`Étiquette: ${tag}`}
                          sx={{ mb: 0.5 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                    <Button 
                      size="small" 
                      variant="contained"
                      color={creation.available ? 'success' : 'error'}
                      disabled={!creation.available}
                      aria-label={creation.available ? 'Cette création est disponible' : 'Cette création est vendue'}
                      sx={{
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: 3,
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      {creation.available ? 'Disponible' : 'Vendu'}
                    </Button>
                    <Button 
                      size="small" 
                      variant="outlined"
                      aria-label={`En savoir plus sur ${creation.title}`}
                      color="primary"
                      sx={{
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          boxShadow: 2,
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      En savoir plus
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  )
}
