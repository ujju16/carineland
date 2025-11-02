'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Chip,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import ImageIcon from '@mui/icons-material/Image'
import { Creation } from '@/app/types'

export default function AdminPage() {
  const [creations, setCreations] = useState<Creation[]>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [editingCreation, setEditingCreation] = useState<Partial<Creation> | null>(null)
  const [formData, setFormData] = useState<Partial<Creation>>({
    title: '',
    description: '',
    imageUrl: '',
    category: 'couronne',
    featured: false,
  })

  const handleOpenDialog = (creation?: Creation) => {
    if (creation) {
      setEditingCreation(creation)
      setFormData(creation)
    } else {
      setEditingCreation(null)
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        category: 'couronne',
        featured: false,
      })
    }
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingCreation(null)
  }

  const handleSave = () => {
    if (editingCreation) {
      setCreations(
        creations.map((c) =>
          c.id === editingCreation.id
            ? { ...c, ...formData, updatedAt: new Date().toISOString() }
            : c
        )
      )
    } else {
      const newCreation: Creation = {
        id: Date.now().toString(),
        title: formData.title || '',
        slug: (formData.title || '').toLowerCase().replace(/\s+/g, '-'),
        description: formData.description || '',
        imageUrl: formData.imageUrl || '',
        imageAlt: formData.title || '',
        category: formData.category || 'autre',
        year: new Date().getFullYear(),
        materials: [],
        dimensions: 'Variable',
        available: true,
        featured: formData.featured || false,
        tags: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setCreations([...creations, newCreation])
    }
    handleCloseDialog()
  }

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette création ?')) {
      setCreations(creations.filter((c) => c.id !== id))
    }
  }

  return (
    <Box component="main" role="main" sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        <Box component="header" sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Administration
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon aria-hidden="true" />}
            size="large"
            onClick={() => handleOpenDialog()}
            aria-label="Ajouter une nouvelle création"
            sx={{ boxShadow: 3 }}
          >
            Nouvelle Création
          </Button>
        </Box>

        {creations.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: 'center' }} role="status" aria-live="polite">
            <ImageIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} aria-hidden="true" />
            <Typography variant="h5" component="h2" gutterBottom>
              Aucune création pour le moment
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Commencez par ajouter votre première création
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<AddIcon aria-hidden="true" />} 
              onClick={() => handleOpenDialog()}
              aria-label="Ajouter votre première création"
            >
              Ajouter une création
            </Button>
          </Paper>
        ) : (
          <Grid 
            container 
            spacing={3}
            component="section"
            aria-label={`${creations.length} créations dans l'administration`}
            role="list"
          >
            {creations.map((creation) => (
              <Grid item xs={12} md={6} lg={4} key={creation.id} role="listitem">
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} aria-label={`Création: ${creation.title}`}>
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: 'grey.200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {creation.imageUrl ? (
                      <img
                        src={creation.imageUrl}
                        alt={`Image de ${creation.title}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <ImageIcon sx={{ fontSize: 60, color: 'grey.400' }} aria-label="Aucune image" />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }} aria-label="Catégorie et statut">
                      <Chip label={creation.category} size="small" color="primary" />
                      {creation.featured && <Chip label="À la une" size="small" color="secondary" />}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {creation.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {creation.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleOpenDialog(creation)}
                      aria-label={`Modifier ${creation.title}`}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(creation.id)}
                      aria-label={`Supprimer ${creation.title}`}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Dialog for Add/Edit */}
        <Dialog 
          open={openDialog} 
          onClose={handleCloseDialog} 
          maxWidth="sm" 
          fullWidth
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">
            {editingCreation ? 'Modifier la création' : 'Nouvelle création'}
          </DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }} role="form" aria-label="Formulaire de création">
              <TextField
                label="Titre"
                fullWidth
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                inputProps={{
                  'aria-label': 'Titre de la création',
                  'aria-required': 'true',
                }}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                inputProps={{
                  'aria-label': 'Description de la création',
                }}
              />
              <TextField
                label="URL de l'image"
                fullWidth
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                inputProps={{
                  'aria-label': 'URL de l\'image',
                }}
              />
              <TextField
                select
                label="Catégorie"
                fullWidth
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value as Creation['category'] })
                }
                inputProps={{
                  'aria-label': 'Catégorie de la création',
                }}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="couronne">Couronne</option>
                <option value="composition">Composition</option>
                <option value="decoration">Décoration</option>
              </TextField>
              <Box>
                <Button
                  variant={formData.featured ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, featured: !formData.featured })}
                  aria-label={formData.featured ? 'Retirer de la une' : 'Mettre à la une'}
                  aria-pressed={formData.featured}
                >
                  {formData.featured ? 'À la une ✓' : 'Mettre à la une'}
                </Button>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} aria-label="Annuler et fermer">Annuler</Button>
            <Button
              onClick={handleSave}
              variant="contained"
              startIcon={<SaveIcon aria-hidden="true" />}
              disabled={!formData.title || !formData.description}
              aria-label={editingCreation ? 'Enregistrer les modifications' : 'Enregistrer la nouvelle création'}
            >
              Enregistrer
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}
