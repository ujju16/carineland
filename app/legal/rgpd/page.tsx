import { Box, Container, Typography, Paper, Alert } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RGPD - Carineland',
  description: 'Conformité RGPD et protection des données personnelles',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RGPDPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          RGPD - Protection des Données
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          Carineland est conforme au Règlement Général sur la Protection des Données (RGPD)
          entré en vigueur le 25 mai 2018.
        </Alert>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Responsable du traitement
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Nom :</strong> Carineland - Carine
            <br />
            <strong>Email :</strong> contact@carineland.com
            <br />
            <strong>Site :</strong> https://carineland.com
          </Typography>
          <Typography variant="body1" paragraph>
            Le responsable du traitement est la personne qui détermine les finalités et les moyens
            du traitement des données personnelles.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Vos droits RGPD
          </Typography>
          <Typography variant="body1" paragraph>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données
            personnelles :
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
            1. Droit d'accès (Article 15)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous avez le droit d'obtenir une copie de vos données personnelles que nous détenons.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
            2. Droit de rectification (Article 16)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez demander la correction de données inexactes ou incomplètes.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
            3. Droit à l'effacement / &quot;Droit à l&apos;oubli&quot; (Article 17)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez demander la suppression de vos données dans certaines conditions.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
            4. Droit à la limitation du traitement (Article 18)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez demander la limitation du traitement de vos données dans certains cas.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
            5. Droit à la portabilité (Article 20)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez recevoir vos données dans un format structuré et couramment utilisé.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
            6. Droit d'opposition (Article 21)
          </Typography>
          <Typography variant="body1" paragraph>
            Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre
            situation particulière.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Comment exercer vos droits ?
          </Typography>
          <Typography variant="body1" paragraph>
            Pour exercer l'un de ces droits, vous pouvez nous contacter :
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>Par email :</strong> contact@carineland.com
            <br />
            <strong>Objet :</strong> &quot;Exercice de mes droits RGPD&quot;
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Base légale du traitement
          </Typography>
          <Typography variant="body1" paragraph>
            Le traitement de vos données personnelles repose sur les bases légales suivantes :
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>
              <strong>Intérêt légitime :</strong> Améliorer l'expérience utilisateur et la sécurité
              du site
            </li>
            <li>
              <strong>Consentement :</strong> Pour les cookies non essentiels (si applicable)
            </li>
            <li>
              <strong>Obligation légale :</strong> Conservation de certaines données pour des
              raisons légales
            </li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Transfert des données hors UE
          </Typography>
          <Typography variant="body1" paragraph>
            Les données sont hébergées par Vercel Inc. (États-Unis) qui est conforme au RGPD et
            utilise les clauses contractuelles types de l'UE pour garantir un niveau de protection
            adéquat.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Durée de conservation
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Données de navigation : 13 mois maximum</li>
            <li>Cookies techniques : Durée de session ou 13 mois</li>
            <li>Logs serveur : 12 mois</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Sécurité des données
          </Typography>
          <Typography variant="body1" paragraph>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées :
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Chiffrement HTTPS</li>
            <li>Hébergement sécurisé</li>
            <li>Accès restreint aux données</li>
            <li>Mise à jour régulière des systèmes</li>
            <li>Sauvegardes régulières</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Droit de réclamation
          </Typography>
          <Typography variant="body1" paragraph>
            Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer
            une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des
            Libertés) :
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>CNIL</strong>
            <br />
            3 Place de Fontenoy
            <br />
            TSA 80715
            <br />
            75334 PARIS CEDEX 07
            <br />
            <br />
            <strong>Téléphone :</strong> 01 53 73 22 22
            <br />
            <strong>Site web :</strong> https://www.cnil.fr
          </Typography>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Mise à jour de cette politique
          </Typography>
          <Typography variant="body1" paragraph>
            Cette politique RGPD peut être mise à jour. La date de dernière mise à jour est
            indiquée en haut de cette page.
          </Typography>
          <Typography variant="body1">
            Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos
            pratiques en matière de protection des données.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
