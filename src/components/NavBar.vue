<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[rgba(0,255,136,0.1)]' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="font-mono text-lg font-bold tracking-tight group">
        <span class="text-[#00ff88]">hs</span><span class="text-[#e0e0e0]">2</span>
        <span class="text-[#6b7280] group-hover:text-[#00ff88] transition-colors"> { }</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-mono">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-[#6b7280] hover:text-[#00ff88] transition-colors duration-200 relative group"
          >
            <span class="text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity">./</span>{{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="px-4 py-2 border border-[#00ff88] text-[#00ff88] text-sm hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all duration-200 font-mono font-bold"
          >
            Únete
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-[#6b7280] hover:text-[#00ff88] transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-[#111111] border-t border-[rgba(0,255,136,0.1)] px-6 py-4"
    >
      <ul class="flex flex-col gap-4 text-sm font-mono">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-[#6b7280] hover:text-[#00ff88] transition-colors block py-1"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="inline-block px-4 py-2 border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all duration-200 font-bold"
            @click="mobileOpen = false"
          >
            Únete
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { href: '#about', label: 'nosotros' },
  { href: '#events', label: 'eventos' },
  { href: '#projects', label: 'proyectos' },
  { href: '#contact', label: 'contacto' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
