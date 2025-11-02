'use client'

import { Box, Link } from '@mui/material'

export default function SkipLink() {
  return (
    <Box
      component="nav"
      aria-label="Liens de navigation rapide"
      sx={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 9999,
        '&:focus-within': {
          left: 0,
          top: 0,
        },
      }}
    >
      <Link
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          backgroundColor: 'primary.main',
          color: 'white',
          padding: 2,
          textDecoration: 'none',
          fontWeight: 600,
          zIndex: 9999,
          '&:focus': {
            left: '50%',
            top: '10px',
            transform: 'translateX(-50%)',
            outline: '3px solid',
            outlineColor: 'secondary.main',
            boxShadow: 3,
          },
        }}
      >
        Aller au contenu principal
      </Link>
    </Box>
  )
}
