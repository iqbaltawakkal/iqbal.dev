<template>
  <main
    class="bg-dark-primary-bg text-dark-primary-text min-h-screen p-4 md:px-0"
  >
    <div class="container mx-auto mb-8">
      <div class="flex flex-col md:flex-row items-center py-14 gap-8">
        <img class="w-56 h-56 rounded-full" src="/headshot.jpg" alt="" />
        <div class="text-left space-y-4 sm:pr-[20%]">
          <h1 class="text-3xl md:text-5xl font-semibold">I'm Iqbal, Hello !</h1>
          <p class="text-dark-secondary-text">
            Frontend Developer from Indonesia, specialized in develop
            user-facing web applications using various Frameworks. Vue/Nuxt is
            my main expertise, but i also use React/Nextjs and eager to learn
            more. I'm also a fan of the open-source community.
          </p>
          <p class="text-dark-secondary-text">
            If you want to contract me on freelance project, hit me up on email
            iqbaltawakkal1@gmail.com.
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold mb-8">My Works</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card
          v-for="(item, index) in works"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :tags="item.tags"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
const works = [
  {
    title: "SITABA: Map based System Information",
    desc:
      "Goverment web application for monitoring disaster and infrasrtucture",
    tags: ["nuxt", "tailwind", "leaflet", "responsive"],
  },
  {
    title: "Wiegand: Digital Car Showroom",
    desc: "Web application for car showroom",
    tags: ["nuxt", "tailwind", "responsive"],
  },
  {
    title: "Jumpapay x Linkaja: Sass payment system",
    desc: "Mobile focused payment system for native mobile webview",
    tags: ["vue", "tailwind", "vuex", "vue-router", "mobile focused"],
  },
  {
    title: "Jumpapay x Gojek: Sass payment system",
    desc:
      "Mobile focused payment system for native mobile webview (required gojek account to use)",
    tags: ["vue", "tailwind", "vuex", "vue-router", "mobile focused"],
  },
  {
    title: "Temanlegal: Sass legal advisory",
    desc: "Web application for legal advisory service",
    tags: ["nuxt", "tailwind", "firebase", "responsive"],
  },
  {
    title: "Online Chess Clock",
    desc: "Chess clock web application for on the board chess game",
    tags: ["nextjs", "tailwind", "PWA", "mobile focused"],
  },
];
</script>
