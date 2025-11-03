# Monitoring avec Grafana & Prometheus

## 🚀 Quick Start

### Lancer les services de monitoring

```bash
docker-compose -f docker-compose.grafana.yml up -d
```

### Accès aux services

- **Grafana**: http://localhost:3001
  - Username: `admin`
  - Password: `carineland2025`
- **Prometheus**: http://localhost:9090

- **Node Exporter**: http://localhost:9100/metrics

## 📊 Dashboards Disponibles

### 1. System Metrics Dashboard

- CPU Usage
- Memory Usage
- Network Traffic
- Disk I/O

### 2. Prochainement

- Next.js Performance Metrics
- Vercel Deployment Metrics
- User Analytics
- Error Tracking

## 🔧 Configuration

### Prometheus

Configuration dans `prometheus/prometheus.yml` :

- Scrape interval: 15s
- Targets: Prometheus, Node Exporter, Vercel Metrics

### Grafana

- Datasource: Prometheus (auto-provisioned)
- Dashboards: Auto-loaded from `grafana/dashboards/`

## 📈 Métriques Collectées

### Système

- CPU: Utilisation par core et moyenne
- Memory: Usage, available, buffers, cache
- Disk: I/O, usage, inodes
- Network: Traffic in/out, errors, drops

### Application (À venir)

- Next.js build time
- Page load time
- API response time
- Error rate
- Active users

## 🛠️ Commandes Utiles

```bash
# Démarrer les services
docker-compose -f docker-compose.grafana.yml up -d

# Voir les logs
docker-compose -f docker-compose.grafana.yml logs -f

# Arrêter les services
docker-compose -f docker-compose.grafana.yml down

# Arrêter et supprimer les volumes
docker-compose -f docker-compose.grafana.yml down -v

# Redémarrer un service
docker-compose -f docker-compose.grafana.yml restart grafana
```

## 📝 Personnalisation

### Ajouter un nouveau dashboard

1. Créer un fichier JSON dans `grafana/dashboards/`
2. Le dashboard sera automatiquement chargé

### Ajouter une nouvelle datasource

1. Créer un fichier YAML dans `grafana/provisioning/datasources/`
2. Redémarrer Grafana

### Modifier les targets Prometheus

1. Éditer `prometheus/prometheus.yml`
2. Redémarrer Prometheus

## 🔐 Sécurité

- Les credentials par défaut sont dans `docker-compose.grafana.yml`
- **Important**: Changer le mot de passe admin en production
- Ne pas exposer les ports en production (utiliser un reverse proxy)

## 🌐 Production

Pour la production, utiliser:

- Grafana Cloud (gratuit jusqu'à 10k séries)
- Vercel Analytics (intégré)
- Sentry pour error tracking
- LogRocket pour session replay

## 📚 Ressources

- [Grafana Documentation](https://grafana.com/docs/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Node Exporter Metrics](https://github.com/prometheus/node_exporter)
- [Vercel Analytics](https://vercel.com/docs/analytics)

---

Développé avec ❤️ par [@ujju16](https://github.com/ujju16)
