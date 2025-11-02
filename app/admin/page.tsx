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
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Chip,
  Alert,
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
        description: formData.description || '',
        imageUrl: formData.imageUrl || '',
        category: formData.category as Creation['category'],
        featured: formData.featured || false,
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
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Administration
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            onClick={() => handleOpenDialog()}
            sx={{ boxShadow: 3 }}
          >
            Nouvelle Création
          </Button>
        </Box>

        {creations.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: 'center' }}>
            <ImageIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Aucune création pour le moment
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Commencez par ajouter votre première création
            </Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
              Ajouter une création
            </Button>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {creations.map((creation) => (
              <Grid item xs={12} md={6} lg={4} key={creation.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                        alt={creation.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <ImageIcon sx={{ fontSize: 60, color: 'grey.400' }} />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      <Chip label={creation.category} size="small" color="primary" />
                      {creation.featured && <Chip label="À la une" size="small" color="secondary" />}
                    </Box>
                    <Typography variant="h6" gutterBottom>
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
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(creation.id)}
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
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingCreation ? 'Modifier la création' : 'Nouvelle création'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                label="Titre"
                fullWidth
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <TextField
                label="URL de l'image"
                fullWidth
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              />
              <TextField
                select
                label="Catégorie"
                fullWidth
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value as Creation['category'] })
                }
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
                >
                  {formData.featured ? 'À la une ✓' : 'Mettre à la une'}
                </Button>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Annuler</Button>
            <Button
              onClick={handleSave}
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={!formData.title || !formData.description}
            >
              Enregistrer
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}
