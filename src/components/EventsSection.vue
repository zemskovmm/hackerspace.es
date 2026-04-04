<template>
  <section id="events" class="py-24 bg-[#0a0a0a] border-t border-[rgba(0,255,136,0.08)]">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="mb-16 flex items-end justify-between">
        <div>
          <span class="text-[#00ff88] font-mono text-sm">// 02</span>
          <h2 class="font-mono font-black text-3xl md:text-4xl text-[#e0e0e0] mt-2">
            <span class="text-[#00ff88]">upcoming</span>_events()
          </h2>
        </div>
        <a href="#contact" class="hidden md:flex items-center gap-2 text-[#6b7280] hover:text-[#00ff88] transition-colors font-mono text-sm">
          ver todos <span class="text-[#00ff88]">→</span>
        </a>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="event in events"
          :key="event.title"
          class="neon-border bg-[#111111] p-6 group cursor-pointer transition-all duration-300 hover:bg-[#141414] relative overflow-hidden"
        >
          <!-- Hover glow line -->
          <div class="absolute top-0 left-0 right-0 h-[1px] bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          <!-- Date badge -->
          <div class="inline-flex flex-col items-center bg-[#0a0a0a] border border-[rgba(0,255,136,0.2)] px-3 py-2 mb-4 min-w-[52px]">
            <span class="font-mono font-bold text-[#00ff88] text-lg leading-none">{{ event.day }}</span>
            <span class="font-mono text-[#6b7280] text-xs uppercase">{{ event.month }}</span>
          </div>

          <h3 class="font-mono font-bold text-[#e0e0e0] text-base mb-2 group-hover:text-[#00ff88] transition-colors">
            {{ event.title }}
          </h3>
          <p class="font-mono text-[#6b7280] text-sm leading-relaxed mb-4">
            {{ event.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in event.tags"
              :key="tag"
              class="font-mono text-xs px-2 py-0.5 bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.15)] text-[#00ff88]"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center gap-2 text-[#6b7280] text-xs font-mono">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ event.location }}
          </div>
        </article>
      </div>

      <div class="mt-8 text-center md:hidden">
        <a href="#contact" class="text-[#6b7280] hover:text-[#00ff88] transition-colors font-mono text-sm">
          ver todos los eventos →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    day: '12',
    month: 'ABR',
    title: 'Taller de Electrónica Básica',
    description: 'Aprende a soldar, leer esquemas y construir tu primer circuito. Para principiantes.',
    tags: ['hardware', 'taller', 'principiantes'],
    location: 'Madrid HQ',
  },
  {
    day: '19',
    month: 'ABR',
    title: 'Hacknight: Web Scraping',
    description: 'Sesión práctica de técnicas de scraping con Python. Trae tu portátil.',
    tags: ['python', 'scraping', 'hacknight'],
    location: 'Online + Madrid',
  },
  {
    day: '26',
    month: 'ABR',
    title: 'Charla: IA Open Source',
    description: 'Un recorrido por las mejores herramientas de IA de código abierto disponibles hoy.',
    tags: ['IA', 'open source', 'charla'],
    location: 'Barcelona Node',
  },
  {
    day: '03',
    month: 'MAY',
    title: '3D Printing Workshop',
    description: 'Diseño con FreeCAD e impresión 3D desde cero. Plazas limitadas.',
    tags: ['3D', 'fabricación', 'taller'],
    location: 'Valencia Lab',
  },
  {
    day: '10',
    month: 'MAY',
    title: 'Hackaton 48h — Clima',
    description: 'Dos días para construir soluciones tecnológicas al cambio climático.',
    tags: ['hackaton', 'climatech', 'equipos'],
    location: 'Madrid HQ',
  },
  {
    day: '17',
    month: 'MAY',
    title: 'Encuentro Mensual',
    description: 'Reunión abierta de la comunidad. Comparte tus proyectos, conoce gente nueva.',
    tags: ['comunidad', 'networking', 'proyectos'],
    location: 'Rotatorio',
  },
]
</script>
