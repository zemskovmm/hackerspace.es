<template>
    <nav class="navbar" :class="{ scrolled }">
        <div class="navbar__inner">
            <a href="/" class="navbar__logo">
                <img src="/logo_anchor.png" alt="hs2" class="navbar__logo-img" /><span class="muted">{ hackerspace.es }</span>
            </a>

            <ul class="navbar__links">
                <li v-for="link in links" :key="link.href">
                    <a :href="link.href">{{ link.label }}</a>
                </li>
                <li>
                    <a href="#contact" class="navbar__cta">Únete</a>
                </li>
            </ul>

            <button
                class="navbar__toggle"
                @click="mobileOpen = !mobileOpen"
                aria-label="Toggle menu"
            >
                <svg
                    v-if="!mobileOpen"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    v-else
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <div v-if="mobileOpen" class="navbar__mobile">
            <ul>
                <li v-for="link in links" :key="link.href">
                    <a :href="link.href" @click="mobileOpen = false">{{
                        link.label
                    }}</a>
                </li>
                <li>
                    <a
                        href="#contact"
                        class="navbar__cta"
                        @click="mobileOpen = false"
                        >Únete</a
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import "./NavBar.css";
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const mobileOpen = ref(false);

const links = [
    { href: "#about", label: "nosotros" },
    { href: "#contact", label: "contacto" },
];

function handleScroll() {
    scrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
