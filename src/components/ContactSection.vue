<template>
  <section id="contact" class="py-24 bg-[#0a0a0a] border-t border-[rgba(0,255,136,0.08)]">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="mb-16">
        <span class="text-[#00ff88] font-mono text-sm">// 04</span>
        <h2 class="font-mono font-black text-3xl md:text-4xl text-[#e0e0e0] mt-2">
          <span class="text-[#00ff88]">join</span>_us()
        </h2>
        <p class="font-mono text-[#6b7280] text-sm mt-3 max-w-xl">
          ¿Quieres formar parte de la comunidad? Únete al Telegram, explora GitHub o mándanos un mensaje.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left: Channels -->
        <div class="space-y-4">
          <h3 class="font-mono font-bold text-[#e0e0e0] text-sm mb-6">
            <span class="text-[#6b7280]">$</span> connect --channels
          </h3>

          <a
            v-for="channel in channels"
            :key="channel.name"
            :href="channel.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 neon-border bg-[#111111] p-4 group transition-all duration-300 hover:bg-[#141414] block"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-lg flex-shrink-0"
              :style="`color: ${channel.color};`"
            >
              {{ channel.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-mono font-bold text-[#e0e0e0] text-sm group-hover:text-[#00ff88] transition-colors">
                {{ channel.name }}
              </div>
              <div class="font-mono text-[#6b7280] text-xs truncate">{{ channel.handle }}</div>
            </div>
            <svg class="w-4 h-4 text-[#6b7280] group-hover:text-[#00ff88] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <!-- Right: Contact form -->
        <div>
          <h3 class="font-mono font-bold text-[#e0e0e0] text-sm mb-6">
            <span class="text-[#6b7280]">$</span> send --message
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block font-mono text-[#6b7280] text-xs mb-2">nombre</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Tu nombre..."
                class="w-full bg-[#111111] border border-[rgba(0,255,136,0.15)] text-[#e0e0e0] font-mono text-sm px-4 py-3 outline-none focus:border-[#00ff88] transition-colors placeholder:text-[#3a3a3a]"
              />
            </div>
            <div>
              <label class="block font-mono text-[#6b7280] text-xs mb-2">email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="tu@email.com"
                class="w-full bg-[#111111] border border-[rgba(0,255,136,0.15)] text-[#e0e0e0] font-mono text-sm px-4 py-3 outline-none focus:border-[#00ff88] transition-colors placeholder:text-[#3a3a3a]"
              />
            </div>
            <div>
              <label class="block font-mono text-[#6b7280] text-xs mb-2">mensaje</label>
              <textarea
                v-model="form.message"
                placeholder="Cuéntanos en qué andas o cómo podemos ayudarte..."
                rows="4"
                class="w-full bg-[#111111] border border-[rgba(0,255,136,0.15)] text-[#e0e0e0] font-mono text-sm px-4 py-3 outline-none focus:border-[#00ff88] transition-colors placeholder:text-[#3a3a3a] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 bg-[#00ff88] text-[#0a0a0a] font-mono font-bold text-sm hover:bg-[#00cc6a] transition-colors duration-200 contact-submit"
            >
              <span v-if="!sent">&gt; enviar mensaje</span>
              <span v-else class="text-[#0a0a0a]">✓ mensaje enviado</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-[rgba(0,255,136,0.08)]">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="font-mono text-sm">
          <span class="text-[#00ff88]">hs</span><span class="text-[#e0e0e0]">2</span>
          <span class="text-[#6b7280]"> { hackerspace.es }</span>
        </div>
        <div class="font-mono text-[#6b7280] text-xs">
          &copy; {{ new Date().getFullYear() }} Hackerspace.es — CC BY-SA 4.0
        </div>
        <div class="font-mono text-[#6b7280] text-xs">
          hecho con <span class="text-[#ff6b35]">♥</span> y <span class="text-[#00ff88]">código abierto</span>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import './ContactSection.css'
import { ref, reactive } from 'vue'

const sent = ref(false)
const form = reactive({ name: '', email: '', message: '' })

function handleSubmit() {
  if (form.name && form.email && form.message) {
    sent.value = true
    setTimeout(() => {
      sent.value = false
      form.name = ''
      form.email = ''
      form.message = ''
    }, 3000)
  }
}

const channels = [
  {
    name: 'Telegram',
    handle: 't.me/hackerspace_es',
    href: 'https://t.me/hackerspace_es',
    icon: '✈️',
    color: '#29aee6',
  },
  {
    name: 'GitHub',
    handle: 'github.com/hackerspace-es',
    href: 'https://github.com/hackerspace-es',
    icon: '🐙',
    color: '#e0e0e0',
  },
  {
    name: 'Matrix / Element',
    handle: '#hackerspace-es:matrix.org',
    href: 'https://matrix.to/#/#hackerspace-es:matrix.org',
    icon: '💬',
    color: '#0dbd8b',
  },
  {
    name: 'Mastodon',
    handle: '@hackerspace_es@mastodon.social',
    href: 'https://mastodon.social/@hackerspace_es',
    icon: '🐘',
    color: '#6364ff',
  },
]
</script>
