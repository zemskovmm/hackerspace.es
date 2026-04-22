<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import EventsSection from "./components/EventsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
    <div class="min-h-screen" style="background-color: #0a0a0a">
        <NavBar />
        <main>
            <HeroSection />
            <AboutSection />
            <ContactSection />
        </main>
    </div>
</template>
