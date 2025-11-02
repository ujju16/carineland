'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

const mockCreations = [
  {
    id: '1',
    title: 'Couronne de Lierre Naturel',
    description: 'Belle couronne artisanale en lierre frais',
    imageUrl: '/placeholder-creation.jpg',
    category: 'couronne',
    featured: true,
  },
  {
    id: '2',
    title: 'Composition Florale',
    description: 'Arrangement unique mêlant fleurs et végétaux',
    imageUrl: '/placeholder-creation.jpg',
    category: 'composition',
    featured: false,
  },
  {
    id: '3',
    title: 'Décoration Murale',
    description: 'Élément décoratif naturel pour votre intérieur',
    imageUrl: '/placeholder-creation.jpg',
    category: 'decoration',
    featured: true,
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filteredCreations = mockCreations.filter((creation) => {
    const matchesFilter = filter === 'all' || creation.category === filter
    const matchesSearch =
      creation.title.toLowerCase().includes(search.toLowerCase()) ||
      creation.description.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
            Galerie de Créations
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', opacity: 0.9 }}>
            Découvrez mes créations artisanales inspirées de la nature
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            placeholder="Rechercher une création..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flexGrow: 1, minWidth: 250 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, newFilter) => newFilter && setFilter(newFilter)}
            aria-label="filter creations"
          >
            <ToggleButton value="all">Tout</ToggleButton>
            <ToggleButton value="couronne">Couronnes</ToggleButton>
            <ToggleButton value="composition">Compositions</ToggleButton>
            <ToggleButton value="decoration">Décorations</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {filteredCreations.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              Aucune création trouvée
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredCreations.map((creation, index) => (
              <Grid item xs={12} sm={6} md={4} key={creation.id}>
                <MotionCard
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 28px rgba(45, 80, 22, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '75%',
                      backgroundColor: 'grey.200',
                      overflow: 'hidden',
                    }}
                  >
                    {creation.featured && (
                      <Chip
                        label="À la une"
                        color="secondary"
                        size="small"
                        sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'grey.300',
                      }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        Image à venir
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={creation.category}
                      size="small"
                      color="primary"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {creation.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {creation.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button size="small" color="primary">
                      Voir plus
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
