<template>
  <section class="about">
    <div class="container">
      <div class="about__header">
        <small>// 01</small>
        <h2><span class="neon">about</span>_us()</h2>
      </div>

      <div class="about__grid">
        <div class="about__mission">
          <p>
            <span class="neon">Hackerspace.es</span> es el punto de encuentro de la comunidad
            maker y hacker en España. Un espacio donde la curiosidad no tiene límites y el
            conocimiento se comparte libremente.
          </p>
          <p>
            Organizamos talleres, hackatones, charlas técnicas y encuentros donde makers,
            desarrolladores, artistas digitales y entusiastas de la tecnología se reúnen
            para aprender, crear y colaborar.
          </p>
          <p>
            Creemos en el <span class="orange">open source</span>, el conocimiento libre y la
            cultura DIY. Si tienes curiosidad por la tecnología, aquí tienes tu hogar.
          </p>

          <div class="about__values">
            <div v-for="value in values" :key="value.label" class="about__value">
              <strong>{{ value.label }}</strong>
              <span> — {{ value.desc }}</span>
            </div>
          </div>
        </div>

        <div class="about__stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-card card">
            <div class="stat-card__value" :class="stat.color">{{ stat.value }}</div>
            <div class="stat-card__label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import './AboutSection.css'

const values = [
  { label: 'Open Source', desc: 'Todo lo que hacemos es libre y abierto' },
  { label: 'Comunidad',   desc: 'Crecemos juntos, compartimos el conocimiento' },
  { label: 'DIY',         desc: 'Si no existe, lo construimos' },
  { label: 'Inclusivo',   desc: 'Bienvenido quien sea, venga de donde venga' },
]

const stats = [
  { value: '300+', label: 'miembros activos',   color: 'neon'   },
  { value: '50+',  label: 'proyectos en marcha', color: 'orange' },
  { value: '120+', label: 'eventos al año',      color: 'neon'   },
  { value: '5+',   label: 'años de comunidad',   color: 'orange' },
]
</script>
