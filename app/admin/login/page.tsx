'use client'

import { useState, FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LoginIcon from '@mui/icons-material/Login'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Identifiants incorrects')
        setLoading(false)
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch {
      setError('Une erreur est survenue')
      setLoading(false)
    }
  }

  return (
    <Box
      component="main"
      role="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={24}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ color: 'white', fontSize: 32 }} aria-hidden="true" />
          </Box>

          <Typography
            component="h1"
            variant="h4"
            sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}
          >
            Administration
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Carineland - Espace sécurisé
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }} role="alert" aria-live="polite">
              {error}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
            noValidate
            aria-label="Formulaire de connexion administrateur"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nom d'utilisateur"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              inputProps={{
                'aria-label': "Nom d'utilisateur",
                'aria-required': 'true',
              }}
              sx={{ mb: 2 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              inputProps={{
                'aria-label': 'Mot de passe',
                'aria-required': 'true',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'
                      }
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading || !username || !password}
              startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
              aria-label={loading ? 'Connexion en cours' : 'Se connecter'}
              sx={{
                py: 1.5,
                fontWeight: 600,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5568d3 0%, #6a3f91 100%)',
                },
              }}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </Box>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
            Développé par @ujju16
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
