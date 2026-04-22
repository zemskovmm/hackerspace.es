<template>
    <section class="about" id="about">
        <div class="container">
            <div class="about__header">
                <small>// 01</small>
                <h2><span class="neon">about</span>_us()</h2>
            </div>

            <div class="about__grid">
                <div class="about__mission">
                    <p>
                        <span class="neon">Hackerspace.es</span> is Spain’s
                        first dedicated security hackerspace on a mission to
                        bring all people who work, study or just love security
                        together.
                    </p>
                    <p>
                        Because hackers need hugs too, we’ve built a high-trust
                        environment with
                        <span class="orange">zero fees and zero barriers.</span>
                    </p>
                    <p>
                        Here,
                        <span class="orange">ISO27001 corporate engineers</span>
                        share coffee with self-taught outcasts,
                        <span class="orange">AI-security researchers</span>
                        debug alongside
                        <span class="neon">ex-VirusTotal alumni</span>, and
                        digital nomads find a home with open-source veterans.
                    </p>
                    <p>
                        We are a bilingual, all-inclusive collective that values
                        a deep-dive exploit just as much as a monthly cinema
                        night. Whether you’re here to rewrite the kernel or just
                        to find your people:
                    </p>
                    <p>Welcome home! 🫂</p>
                </div>

                <div class="about__stats">
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="stat-card card"
                    >
                        <div class="stat-card__value" :class="stat.color">
                            {{ stat.value }}
                        </div>
                        <div class="stat-card__label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import "./AboutSection.css";

const stats = [
    { value: "500", label: "people across platforms", color: "neon" },
    { value: "10+", label: "events/year", color: "orange" },
    { value: "10+", label: "Allied Communities", color: "neon" },
    { value: "0", label: "Access Fees", color: "orange" },
];
</script>
