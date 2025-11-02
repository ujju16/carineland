import { Box, Container, Typography, Paper } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Carineland',
  description: 'Politique de confidentialité et protection des données personnelles',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          Politique de Confidentialité
        </Typography>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Carineland s'engage à protéger la vie privée de ses visiteurs. Cette politique explique
            comment nous collectons, utilisons et protégeons vos données personnelles.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Données collectées
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Données de navigation :</strong>
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Pages visitées</li>
            <li>Durée de visite</li>
            <li>Référent (site d'origine)</li>
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            <strong>Cookies :</strong> Le site utilise des cookies techniques nécessaires au bon
            fonctionnement du site.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Utilisation des données
          </Typography>
          <Typography variant="body1" paragraph>
            Les données collectées sont utilisées pour :
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Améliorer l'expérience utilisateur</li>
            <li>Analyser le trafic du site</li>
            <li>Assurer la sécurité du site</li>
            <li>Comprendre les préférences des visiteurs</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Durée de conservation
          </Typography>
          <Typography variant="body1" paragraph>
            Les données de navigation sont conservées pour une durée maximale de 13 mois.
          </Typography>
          <Typography variant="body1" paragraph>
            Les cookies techniques sont conservés pour la durée de la session ou selon leur
            configuration spécifique (voir notre politique cookies).
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Vos droits (RGPD)
          </Typography>
          <Typography variant="body1" paragraph>
            Conformément au RGPD, vous disposez des droits suivants :
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            Pour exercer ces droits, contactez-nous à : <strong>contact@carineland.com</strong>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Sécurité des données
          </Typography>
          <Typography variant="body1" paragraph>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
            pour protéger vos données contre tout accès non autorisé, modification, divulgation ou
            destruction.
          </Typography>
          <Typography variant="body1" paragraph>
            Le site utilise le protocole HTTPS pour sécuriser les communications.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Partage des données
          </Typography>
          <Typography variant="body1" paragraph>
            Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à
            des fins commerciales.
          </Typography>
          <Typography variant="body1" paragraph>
            Les données peuvent être partagées uniquement avec :
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Notre hébergeur (Vercel) pour le fonctionnement technique du site</li>
            <li>Les autorités légales si requis par la loi</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Pour toute question concernant cette politique de confidentialité :
          </Typography>
          <Typography variant="body1">
            <strong>Email :</strong> contact@carineland.com
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
