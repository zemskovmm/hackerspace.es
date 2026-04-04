<template>
  <section class="contact">
    <div class="container">
      <div class="contact__header">
        <small>// 04</small>
        <h2><span class="neon">join</span>_us()</h2>
        <p>¿Quieres formar parte de la comunidad? Únete al Telegram, explora GitHub o mándanos un mensaje.</p>
      </div>

      <div class="contact__grid">
        <div class="contact__channels">
          <h3><span class="muted">$</span> connect --channels</h3>

          <a
            v-for="channel in channels"
            :key="channel.name"
            :href="channel.href"
            class="channel-link card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="channel-link__icon" :style="`color: ${channel.color};`">
              {{ channel.icon }}
            </div>
            <div class="channel-link__info">
              <strong>{{ channel.name }}</strong>
              <span>{{ channel.handle }}</span>
            </div>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div class="contact__form">
          <h3><span class="muted">$</span> send --message</h3>

          <form @submit.prevent="handleSubmit">
            <div class="form-field">
              <label>nombre</label>
              <input v-model="form.name" type="text" placeholder="Tu nombre..." />
            </div>
            <div class="form-field">
              <label>email</label>
              <input v-model="form.email" type="email" placeholder="tu@email.com" />
            </div>
            <div class="form-field">
              <label>mensaje</label>
              <textarea v-model="form.message" rows="4" placeholder="Cuéntanos en qué andas..."></textarea>
            </div>
            <button type="submit">
              <span v-if="!sent">&gt; enviar mensaje</span>
              <span v-else>✓ mensaje enviado</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <footer>
      <div>
        <span class="neon">hs</span>2<span class="muted"> { hackerspace.es }</span>
      </div>
      <small>&copy; {{ new Date().getFullYear() }} Hackerspace.es — CC BY-SA 4.0</small>
      <small>hecho con <span class="orange">♥</span> y <span class="neon">código abierto</span></small>
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
  { name: 'Telegram',       handle: 't.me/hackerspace_es',               href: 'https://t.me/hackerspace_es',                          icon: '✈️', color: '#29aee6' },
  { name: 'GitHub',         handle: 'github.com/hackerspace-es',          href: 'https://github.com/hackerspace-es',                    icon: '🐙', color: '#e0e0e0' },
  { name: 'Matrix / Element', handle: '#hackerspace-es:matrix.org',       href: 'https://matrix.to/#/#hackerspace-es:matrix.org',       icon: '💬', color: '#0dbd8b' },
  { name: 'Mastodon',       handle: '@hackerspace_es@mastodon.social',    href: 'https://mastodon.social/@hackerspace_es',               icon: '🐘', color: '#6364ff' },
]
</script>
