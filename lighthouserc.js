module.exports = {
  ci: {
    collect: {
      startServerCommand: 'bun run build && bun run start',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/gallery',
        'http://localhost:3000/about',
      ],
      numberOfRuns: 3,
      startServerReadyPattern: 'Ready',
      startServerReadyTimeout: 60000,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
