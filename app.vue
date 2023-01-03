<template>
  <main>
    <Header />
    <div
      class="bg-dark-primary-bg text-dark-primary-text min-h-screen p-4 md:px-0"
    >
      <div class="container mx-auto mb-8">
        <div class="flex flex-col md:flex-row items-center py-14 gap-8">
          <img
            class="w-56 h-56 rounded-full"
            src="~/assets/img/headshot.jpg"
            alt=""
          />
          <div class="text-left space-y-4 sm:pr-[20%]">
            <h1 class="text-3xl md:text-5xl font-semibold">
              I'm Iqbal, Hello !
            </h1>
            <p class="text-dark-secondary-text">
              Frontend developer specialized in develop user-facing web
              applications using various Frameworks. Vue/Nuxt is my main
              expertise, but i do React/Nextjs too and eager to learn more. I'm
              also a fan of the open-source community.
            </p>
            <p class="text-dark-secondary-text">
              If you want to contract me on freelance project, hit me up on
              email iqbaltawakkal1@gmail.com.
            </p>
          </div>
        </div>
      </div>
      <div class="container mx-auto mb-8">
        <h1 class="text-2xl font-semibold mb-8">Recent works</h1>
      </div>
      <div class="slider overflow-hidden">
        <div class="slide-track">
          <Card
            v-for="(item, index) in works"
            :key="index"
            :title="item.title"
            :desc="item.desc"
            :tags="item.tags"
          />
        </div>
      </div>
    </div>
    <Footer v-if="false" />
    <Hover v-if="false" />
  </main>
</template>

<script setup>
const works = [
  {
    title: "Marqly: Bookmark manager",
    desc: "Chrome extenstion for managing bookmark like a pro.",
    tags: ["vue", "tailwind", "composition api", "pinia"],
  },
  {
    title: "SITABA: Map based System Information",
    desc: "Goverment web application for monitoring disaster and infrasrtucture.",
    tags: ["nuxt", "tailwind", "leaflet", "responsive", "composition api"],
  },
  {
    title: "Wiegand Automobile",
    desc: "Digital car showroom web application.",
    tags: ["nuxt", "tailwind", "responsive"],
  },
  {
    title: "Jumpapay x Linkaja: Tax payment service",
    desc: "Mobile focused webview to integrate linkaja payment system.",
    tags: ["vue", "tailwind", "vuex", "vue-router", "mobile focused"],
  },
  {
    title: "Jumpapay x Gojek: Tax payment service",
    desc: "Mobile focused webview to integrate gojek payment system (account required)",
    tags: ["vue", "tailwind", "vuex", "vue-router", "mobile focused"],
  },
  {
    title: "Temanlegal: legal advisory service",
    desc: "Web application for legal advisory Saas.",
    tags: ["nuxt", "tailwind", "firebase", "responsive"],
  },
  {
    title: "Online Chess Clock",
    desc: "Chess clock web application for on the board chess game.",
    tags: ["nextjs", "tailwind", "PWA", "mobile focused"],
  },
  {
    title: "Reza x Dewi Wedding profile",
    desc: "Wedding profile web application with personal invitation.",
    tags: ["nuxt", "tailwind", "PWA", "responsive", "faunaDB"],
  },
];
</script>

<style>
.slide-track {
  display: inline-block;
  animation: move 30s linear infinite;
  white-space: nowrap;
}

.slide-track .card {
  margin: 0px 20px;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
