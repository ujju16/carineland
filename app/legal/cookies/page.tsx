import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestion des Cookies - Carineland',
  description: 'Politique de gestion des cookies',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          Gestion des Cookies
        </Typography>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Qu'est-ce qu'un cookie ?
          </Typography>
          <Typography variant="body1" paragraph>
            Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un
            site web. Les cookies permettent au site de mémoriser vos actions et préférences.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Cookies utilisés sur Carineland
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Type</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Nom</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Finalité</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Durée</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Technique</TableCell>
                  <TableCell>rainbowAnimationSeen</TableCell>
                  <TableCell>Mémoriser l'affichage de l'animation</TableCell>
                  <TableCell>Session</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Technique</TableCell>
                  <TableCell>next-auth.*</TableCell>
                  <TableCell>Gestion de session (si admin)</TableCell>
                  <TableCell>Session</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Performance</TableCell>
                  <TableCell>_vercel_*</TableCell>
                  <TableCell>Analytics de performance</TableCell>
                  <TableCell>1 an</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Types de cookies
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
            1. Cookies techniques (nécessaires)
          </Typography>
          <Typography variant="body1" paragraph>
            Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être
            désactivés car le site ne fonctionnerait pas correctement sans eux.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
            2. Cookies de performance
          </Typography>
          <Typography variant="body1" paragraph>
            Ces cookies nous permettent de mesurer et d'améliorer les performances du site. Toutes
            les informations collectées sont anonymes.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Gérer vos préférences
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez gérer les cookies directement depuis votre navigateur :
          </Typography>

          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>Chrome :</strong>
            <br />
            Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
            <br />
            <br />
            <strong>Firefox :</strong>
            <br />
            Options → Vie privée et sécurité → Cookies et données de sites
            <br />
            <br />
            <strong>Safari :</strong>
            <br />
            Préférences → Confidentialité → Cookies et données de sites web
            <br />
            <br />
            <strong>Edge :</strong>
            <br />
            Paramètres → Confidentialité, recherche et services → Cookies
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Cookies tiers
          </Typography>
          <Typography variant="body1" paragraph>
            Actuellement, Carineland n'utilise pas de cookies tiers (pas de tracking publicitaire,
            pas de réseaux sociaux intégrés).
          </Typography>
          <Typography variant="body1" paragraph>
            Si des services tiers sont ajoutés à l'avenir (Google Analytics, etc.), cette politique
            sera mise à jour en conséquence.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Durée de conservation
          </Typography>
          <Typography variant="body1" paragraph>
            Les cookies techniques sont conservés pour la durée de votre session ou jusqu'à 13 mois
            maximum selon leur fonction spécifique.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Pour toute question concernant l'utilisation des cookies :
          </Typography>
          <Typography variant="body1">
            <strong>Email :</strong> contact@carineland.com
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
