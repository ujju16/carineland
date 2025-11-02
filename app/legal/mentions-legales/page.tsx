import { Box, Container, Typography, Paper } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Carineland',
  description: 'Mentions légales du site Carineland',
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          Mentions Légales
        </Typography>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Éditeur du site
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Nom :</strong> Carineland
            <br />
            <strong>Forme juridique :</strong> Artisan / Auto-entrepreneur
            <br />
            <strong>Responsable :</strong> Carine
            <br />
            <strong>Email :</strong> contact@carineland.com
            <br />
            <strong>Site web :</strong> https://carineland.com
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Hébergement
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Hébergeur :</strong> Vercel Inc.
            <br />
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            <strong>Site :</strong> https://vercel.com
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Développement
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Développeur :</strong> @ujju16
            <br />
            <strong>GitHub :</strong> https://github.com/ujju16
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Propriété intellectuelle
          </Typography>
          <Typography variant="body1" paragraph>
            Le site Carineland et l'ensemble de son contenu (textes, images, créations, design)
            sont la propriété exclusive de Carine / Carineland.
          </Typography>
          <Typography variant="body1" paragraph>
            Toute reproduction, distribution, modification ou utilisation du contenu sans
            autorisation préalable est strictement interdite et peut faire l'objet de poursuites.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Responsabilité
          </Typography>
          <Typography variant="body1" paragraph>
            L'éditeur s'efforce de fournir des informations exactes et à jour. Toutefois, il ne
            peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
            disposition sur ce site.
          </Typography>
          <Typography variant="body1" paragraph>
            L'éditeur ne saurait être tenu responsable des erreurs ou omissions, d'une absence de
            disponibilité des informations ou de tout dommage résultant de l'utilisation du site.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Pour toute question concernant les mentions légales, vous pouvez nous contacter à
            l'adresse : <strong>contact@carineland.com</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
