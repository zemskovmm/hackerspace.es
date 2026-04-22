<template>
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact__header">
                <small>// 04</small>
                <h2><span class="neon">join</span>_us()</h2>
                <p>
                    We don't have a physical location yet but catch up with the
                    other people here:
                </p>
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
                        <div
                            class="channel-link__icon"
                            :style="`color: ${channel.color};`"
                        >
                            {{ channel.icon }}
                        </div>
                        <div class="channel-link__info">
                            <strong>{{ channel.name }}</strong>
                            <span>{{ channel.handle }}</span>
                        </div>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <footer>
            <div>
                <span class="neon">hs</span>2<span class="muted">
                    { hackerspace.es }</span
                >
            </div>
            <small
                >&copy; {{ new Date().getFullYear() }} Hackerspace.es — CC BY-SA
                4.0</small
            >
            <small
                >hecho con <span class="orange">♥</span> y
                <span class="neon">código abierto</span></small
            >
        </footer>
    </section>
</template>

<script setup>
import "./ContactSection.css";
import { ref, reactive } from "vue";

const sent = ref(false);
const form = reactive({ name: "", email: "", message: "" });

const channels = [
    {
        name: "Telegram",
        handle: "t.me/hackerspace_es",
        href: "https://t.me/hackerspace_es",
        icon: "✈️",
        color: "#29aee6",
    },
];
</script>
