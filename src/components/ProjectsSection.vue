<template>
  <section id="projects" class="py-24 bg-[#111111] border-t border-[rgba(0,255,136,0.08)]">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="mb-16">
        <span class="text-[#00ff88] font-mono text-sm">// 03</span>
        <h2 class="font-mono font-black text-3xl md:text-4xl text-[#e0e0e0] mt-2">
          <span class="text-[#00ff88]">community</span>_projects()
        </h2>
        <p class="font-mono text-[#6b7280] text-sm mt-3 max-w-xl">
          Proyectos construidos por y para la comunidad. Todos open source, todos bienvenidos a contribuir.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.name"
          class="neon-border bg-[#0a0a0a] p-6 group transition-all duration-300 hover:bg-[#0d0d0d] relative flex flex-col"
        >
          <!-- Top accent line -->
          <div
            class="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
            :style="`background: ${project.accent};`"
          ></div>

          <div class="flex items-start justify-between mb-4">
            <div class="text-2xl">{{ project.icon }}</div>
            <div class="flex gap-2">
              <span
                class="font-mono text-xs px-2 py-0.5 border"
                :class="project.statusClass"
              >
                {{ project.status }}
              </span>
            </div>
          </div>

          <h3 class="font-mono font-bold text-[#e0e0e0] text-base mb-2 group-hover:text-[#00ff88] transition-colors">
            {{ project.name }}
          </h3>
          <p class="font-mono text-[#6b7280] text-sm leading-relaxed mb-4 flex-1">
            {{ project.description }}
          </p>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="font-mono text-xs px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] text-[#6b7280]"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
            <div class="flex items-center gap-3 text-[#6b7280] text-xs font-mono">
              <span class="flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                {{ project.stars }}
              </span>
              <span>{{ project.contributors }} contrib.</span>
            </div>
            <a
              :href="project.github"
              class="font-mono text-xs text-[#00ff88] hover:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              ver código →
            </a>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <a
          href="https://github.com/hackerspace-es"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(0,255,136,0.3)] text-[#00ff88] font-mono text-sm hover:border-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-all duration-200"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          ver todos los proyectos en GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'RadioHackers SDR',
    icon: '📡',
    description: 'Plataforma web para explorar el espectro de radio con RTL-SDR. Visualización en tiempo real y decodificación de señales.',
    stack: ['Python', 'Vue3', 'WebSocket', 'RTL-SDR'],
    status: 'activo',
    statusClass: 'border-[rgba(0,255,136,0.3)] text-[#00ff88] bg-[rgba(0,255,136,0.05)]',
    accent: '#00ff88',
    stars: '142',
    contributors: '12',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'MakerMap España',
    icon: '🗺️',
    description: 'Mapa colaborativo de hackerspaces, makerspaces y fab labs en toda España. Datos abiertos, contribuciones bienvenidas.',
    stack: ['Leaflet', 'TypeScript', 'OpenStreetMap'],
    status: 'activo',
    statusClass: 'border-[rgba(0,255,136,0.3)] text-[#00ff88] bg-[rgba(0,255,136,0.05)]',
    accent: '#00ff88',
    stars: '89',
    contributors: '34',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'BioHack Toolkit',
    icon: '🧬',
    description: 'Herramientas de código abierto para biohacking DIY. Análisis de datos, protocolos y documentación para makers bio.',
    stack: ['Python', 'Jupyter', 'Arduino'],
    status: 'beta',
    statusClass: 'border-[rgba(255,107,53,0.3)] text-[#ff6b35] bg-[rgba(255,107,53,0.05)]',
    accent: '#ff6b35',
    stars: '56',
    contributors: '8',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'Locker Control',
    icon: '🔐',
    description: 'Sistema de control de taquillas para el espacio físico. ESP32 + RFID + dashboard web. Ya en producción.',
    stack: ['C++', 'ESP32', 'MQTT', 'Vue3'],
    status: 'producción',
    statusClass: 'border-[rgba(0,255,136,0.3)] text-[#00ff88] bg-[rgba(0,255,136,0.05)]',
    accent: '#00ff88',
    stars: '210',
    contributors: '6',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'EventBot',
    icon: '🤖',
    description: 'Bot de Telegram para la gestión de eventos. Registro, recordatorios, listas de espera y notificaciones automáticas.',
    stack: ['Python', 'Telegram API', 'SQLite'],
    status: 'activo',
    statusClass: 'border-[rgba(0,255,136,0.3)] text-[#00ff88] bg-[rgba(0,255,136,0.05)]',
    accent: '#00ff88',
    stars: '73',
    contributors: '5',
    github: 'https://github.com/hackerspace-es',
  },
  {
    name: 'OpenBadges HS',
    icon: '🏅',
    description: 'Sistema de badges digitales para reconocer habilidades y participación en la comunidad. Compatible con Mozilla OpenBadges.',
    stack: ['Node.js', 'OpenBadges', 'PostgreSQL'],
    status: 'wip',
    statusClass: 'border-[rgba(107,114,128,0.3)] text-[#6b7280] bg-[rgba(107,114,128,0.05)]',
    accent: '#6b7280',
    stars: '28',
    contributors: '3',
    github: 'https://github.com/hackerspace-es',
  },
]
</script>
