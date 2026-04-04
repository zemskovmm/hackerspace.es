<template>
  <section class="events">
    <div class="container">
      <div class="events__header">
        <div>
          <small>// 02</small>
          <h2><span class="neon">upcoming</span>_events()</h2>
        </div>
        <a href="#contact">ver todos <span class="neon">→</span></a>
      </div>

      <div class="events__grid">
        <article v-for="event in events" :key="event.title" class="event-card card">
          <div class="event-card__date">
            <span class="day">{{ event.day }}</span>
            <span class="month">{{ event.month }}</span>
          </div>

          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>

          <div class="event-card__tags">
            <span v-for="tag in event.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <div class="event-card__location">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ event.location }}
          </div>
        </article>
      </div>

      <div class="events__more">
        <a href="#contact">ver todos los eventos →</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import './EventsSection.css'

const events = [
  {
    day: '12', month: 'ABR',
    title: 'Taller de Electrónica Básica',
    description: 'Aprende a soldar, leer esquemas y construir tu primer circuito. Para principiantes.',
    tags: ['hardware', 'taller', 'principiantes'],
    location: 'Madrid HQ',
  },
  {
    day: '19', month: 'ABR',
    title: 'Hacknight: Web Scraping',
    description: 'Sesión práctica de técnicas de scraping con Python. Trae tu portátil.',
    tags: ['python', 'scraping', 'hacknight'],
    location: 'Online + Madrid',
  },
  {
    day: '26', month: 'ABR',
    title: 'Charla: IA Open Source',
    description: 'Un recorrido por las mejores herramientas de IA de código abierto disponibles hoy.',
    tags: ['IA', 'open source', 'charla'],
    location: 'Barcelona Node',
  },
  {
    day: '03', month: 'MAY',
    title: '3D Printing Workshop',
    description: 'Diseño con FreeCAD e impresión 3D desde cero. Plazas limitadas.',
    tags: ['3D', 'fabricación', 'taller'],
    location: 'Valencia Lab',
  },
  {
    day: '10', month: 'MAY',
    title: 'Hackaton 48h — Clima',
    description: 'Dos días para construir soluciones tecnológicas al cambio climático.',
    tags: ['hackaton', 'climatech', 'equipos'],
    location: 'Madrid HQ',
  },
  {
    day: '17', month: 'MAY',
    title: 'Encuentro Mensual',
    description: 'Reunión abierta de la comunidad. Comparte tus proyectos, conoce gente nueva.',
    tags: ['comunidad', 'networking', 'proyectos'],
    location: 'Rotatorio',
  },
]
</script>
