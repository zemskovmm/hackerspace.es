<template>
  <section class="projects">
    <div class="container">
      <div class="projects__header">
        <small>// 03</small>
        <h2><span class="neon">community</span>_projects()</h2>
        <p>Proyectos construidos por y para la comunidad. Todos open source, todos bienvenidos a contribuir.</p>
      </div>

      <div class="projects__grid">
        <article v-for="project in projects" :key="project.name" class="project-card card">
          <div class="project-card__accent" :style="`background: ${project.accent};`"></div>

          <div class="project-card__top">
            <span>{{ project.icon }}</span>
            <span class="project-card__status" :class="`project-card__status--${project.statusKey}`">
              {{ project.status }}
            </span>
          </div>

          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>

          <div class="project-card__stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>

          <div class="project-card__footer">
            <div class="project-card__meta">
              <span>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                {{ project.stars }}
              </span>
              <span>{{ project.contributors }} contrib.</span>
            </div>
            <a :href="project.github" target="_blank" rel="noopener noreferrer">ver código →</a>
          </div>
        </article>
      </div>

      <div class="projects__cta">
        <a href="https://github.com/hackerspace-es" class="btn-outline" target="_blank" rel="noopener noreferrer">
          ver todos los proyectos en GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import './ProjectsSection.css'

const projects = [
  {
    name: 'RadioHackers SDR',
    icon: '📡',
    description: 'Plataforma web para explorar el espectro de radio con RTL-SDR. Visualización en tiempo real y decodificación de señales.',
    stack: ['Python', 'Vue3', 'WebSocket', 'RTL-SDR'],
    status: 'activo', statusKey: 'active', accent: '#00ff88',
    stars: '142', contributors: '12',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'MakerMap España',
    icon: '🗺️',
    description: 'Mapa colaborativo de hackerspaces, makerspaces y fab labs en toda España. Datos abiertos, contribuciones bienvenidas.',
    stack: ['Leaflet', 'TypeScript', 'OpenStreetMap'],
    status: 'activo', statusKey: 'active', accent: '#00ff88',
    stars: '89', contributors: '34',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'BioHack Toolkit',
    icon: '🧬',
    description: 'Herramientas de código abierto para biohacking DIY. Análisis de datos, protocolos y documentación para makers bio.',
    stack: ['Python', 'Jupyter', 'Arduino'],
    status: 'beta', statusKey: 'beta', accent: '#ff6b35',
    stars: '56', contributors: '8',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'Locker Control',
    icon: '🔐',
    description: 'Sistema de control de taquillas para el espacio físico. ESP32 + RFID + dashboard web. Ya en producción.',
    stack: ['C++', 'ESP32', 'MQTT', 'Vue3'],
    status: 'producción', statusKey: 'active', accent: '#00ff88',
    stars: '210', contributors: '6',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'EventBot',
    icon: '🤖',
    description: 'Bot de Telegram para la gestión de eventos. Registro, recordatorios, listas de espera y notificaciones automáticas.',
    stack: ['Python', 'Telegram API', 'SQLite'],
    status: 'activo', statusKey: 'active', accent: '#00ff88',
    stars: '73', contributors: '5',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'OpenBadges HS',
    icon: '🏅',
    description: 'Sistema de badges digitales para reconocer habilidades y participación en la comunidad. Compatible con Mozilla OpenBadges.',
    stack: ['Node.js', 'OpenBadges', 'PostgreSQL'],
    status: 'wip', statusKey: 'wip', accent: '#6b7280',
    stars: '28', contributors: '3',
    github: 'https://github.com/hackerspace-es',
  },
]
</script>
