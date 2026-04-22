<template>
    <section class="hero grid-bg scanline">
        <div class="hero__glow"></div>

        <div class="hero__content">
            <div class="hero__prompt">
                <span class="neon">$</span>
                hackerspace.es
                <span class="orange">~</span>
                málaga, spain
                <span class="cursor-blink neon">█</span>
            </div>

            <h1>
                <span class="neon">HACK</span>ER<br />SPACE<span class="orange"
                    >ES</span
                >
            </h1>

            <div class="hero__tagline">
                <span class="typed">{{ displayText }}</span
                ><span class="cursor-blink neon">|</span>
            </div>

            <p>
                A NEW COMMUNITY OF <span class="neon">HACKERS</span> AND CYBER
                SECURITY ENTHUSIASTS
            </p>
            <p>BASED IN MALAGA, SPAIN</p>

            <div class="hero__ctas">
                <a href="#contact" class="btn-primary">&gt; Únete ahora</a>
            </div>

            <div class="hero__scroll">
                <span>scroll</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    </section>
</template>

<script setup>
import "./HeroSection.css";
import { ref, onMounted, onUnmounted } from "vue";

const phrases = [
    "A Warm Cyber Community",
    "Open Intelligence Exchange",
    "Probe, Pivot, Pioneer",
    "Universal Logic Only",
    "Grit, Wit, Vision",
    "Hackers Need Hugs",
];

const displayText = ref("");
let phraseIndex = 0;
let charIndex = 0;
let typing = true;
let timer = null;

function typewriter() {
    const current = phrases[phraseIndex];
    if (typing) {
        if (charIndex < current.length) {
            displayText.value += current[charIndex++];
            timer = setTimeout(typewriter, 60);
        } else {
            typing = false;
            timer = setTimeout(typewriter, 2000);
        }
    } else {
        if (charIndex > 0) {
            displayText.value = current.slice(0, --charIndex);
            timer = setTimeout(typewriter, 30);
        } else {
            typing = true;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            timer = setTimeout(typewriter, 300);
        }
    }
}

onMounted(() => typewriter());
onUnmounted(() => clearTimeout(timer));
</script>
