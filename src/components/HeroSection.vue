<template>
    <section
        id="hero"
        class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanline"
    >
        <!-- Radial glow -->
        <div class="absolute inset-0 pointer-events-none">
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full hero-glow"
            ></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <!-- Terminal prompt -->
            <div
                class="inline-flex items-center gap-2 text-[#6b7280] text-sm font-mono mb-8 border border-[rgba(0,255,136,0.1)] px-4 py-2"
            >
                <span class="text-[#00ff88]">$</span>
                <span>hackerspace.es</span>
                <span class="text-[#ff6b35]">~</span>
                <span>málaga, spain</span>
                <span class="cursor-blink text-[#00ff88]">█</span>
            </div>

            <!-- Main heading -->
            <h1
                class="font-mono font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tighter"
            >
                <span class="text-[#00ff88] hero-heading-neon">HACK</span>
                <span class="text-[#e0e0e0]">ER</span>
                <br />
                <span class="text-[#e0e0e0]">SPACE</span>
                <span class="text-[#ff6b35] hero-heading-orange">ES</span>
            </h1>

            <!-- Typewriter tagline -->
            <div class="h-8 mb-10 flex items-center justify-center">
                <p class="font-mono text-lg md:text-xl text-[#6b7280]">
                    <span class="text-[#e0e0e0]">{{ displayText }}</span>
                    <span class="cursor-blink text-[#00ff88]">|</span>
                </p>
            </div>

            <!-- Description -->
            <p
                class="font-mono text-[#6b7280] max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed"
            >
                Una comunidad de <span class="text-[#00ff88]">hackers</span>,
                makers, desarrolladores y creadores en España. Construimos,
                aprendemos y colaboramos juntos.
            </p>

            <!-- CTAs -->
            <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a
                    href="#contact"
                    class="px-8 py-3 bg-[#00ff88] text-[#0a0a0a] font-mono font-bold text-sm hover:bg-[#00cc6a] transition-colors duration-200 w-full sm:w-auto text-center hero-cta-primary"
                >
                    &gt; Únete ahora
                </a>
                <a
                    href="#projects"
                    class="px-8 py-3 border border-[rgba(0,255,136,0.3)] text-[#00ff88] font-mono font-bold text-sm hover:border-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-all duration-200 w-full sm:w-auto text-center"
                >
                    &gt; Ver proyectos
                </a>
            </div>

            <!-- Scroll indicator -->
            <div
                class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            >
                <span class="text-[#6b7280] text-xs font-mono">scroll</span>
                <svg
                    class="w-4 h-4 text-[#00ff88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
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
    "Hackers. Makers. Comunidad.",
    "Abre. Comparte. Construye.",
    "Open Source. Open Mind.",
    "Crea. Aprende. Repite.",
    "Hardware. Software. Cultura.",
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
