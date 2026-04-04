<template>
  <section id="about" class="py-24 bg-[#111111] border-t border-[rgba(0,255,136,0.08)]">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="mb-16">
        <span class="text-[#00ff88] font-mono text-sm">// 01</span>
        <h2 class="font-mono font-black text-3xl md:text-4xl text-[#e0e0e0] mt-2">
          <span class="text-[#00ff88]">about</span>_us()
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left: Mission -->
        <div class="space-y-6">
          <p class="font-mono text-[#6b7280] leading-relaxed text-sm md:text-base">
            <span class="text-[#00ff88]">Hackerspace.es</span> es el punto de encuentro de la comunidad
            maker y hacker en España. Un espacio donde la curiosidad no tiene límites y el conocimiento
            se comparte libremente.
          </p>
          <p class="font-mono text-[#6b7280] leading-relaxed text-sm md:text-base">
            Organizamos talleres, hackatones, charlas técnicas y encuentros donde makers, desarrolladores,
            artistas digitales y entusiastas de la tecnología se reúnen para aprender, crear y colaborar.
          </p>
          <p class="font-mono text-[#6b7280] leading-relaxed text-sm md:text-base">
            Creemos en el <span class="text-[#ff6b35]">open source</span>, el conocimiento libre y la
            cultura DIY. Si tienes curiosidad por la tecnología, aquí tienes tu hogar.
          </p>

          <!-- Values -->
          <div class="pt-4 space-y-3">
            <div v-for="value in values" :key="value.label" class="flex items-start gap-3">
              <span class="text-[#00ff88] font-mono text-sm mt-0.5">></span>
              <div>
                <span class="font-mono font-bold text-[#e0e0e0] text-sm">{{ value.label }}</span>
                <span class="text-[#6b7280] font-mono text-sm"> — {{ value.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Stats -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="neon-border bg-[#0a0a0a] p-6 transition-all duration-300 group"
          >
            <div
              class="font-mono font-black text-3xl md:text-4xl mb-1 transition-colors duration-300"
              :class="stat.color"
            >
              {{ stat.value }}
            </div>
            <div class="font-mono text-[#6b7280] text-xs md:text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { label: 'Open Source', desc: 'Todo lo que hacemos es libre y abierto' },
  { label: 'Comunidad', desc: 'Crecemos juntos, compartimos el conocimiento' },
  { label: 'DIY', desc: 'Si no existe, lo construimos' },
  { label: 'Inclusivo', desc: 'Bienvenido quien sea, venga de donde venga' },
]

const stats = [
  { value: '300+', label: 'miembros activos', color: 'text-[#00ff88]' },
  { value: '50+', label: 'proyectos en marcha', color: 'text-[#ff6b35]' },
  { value: '120+', label: 'eventos al año', color: 'text-[#00ff88]' },
  { value: '5+', label: 'años de comunidad', color: 'text-[#ff6b35]' },
]
</script>
