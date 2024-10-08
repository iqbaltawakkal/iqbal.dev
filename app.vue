<template>
  <main
    class="white flex flex-col items-center justify-start sm:justify-center h-screen"
  >
    <div
      class="container w-full sm:max-w-xl border-0 sm:border border-gray-200 bg-white rounded-none sm:rounded-md overflow-hidden"
    >
      <div class="h-32 overflow-hidden">
        <img
          class="w-full"
          src="./assets/img/backdrop.jpg"
          alt=""
        >
      </div>
      <div class="flex justify-center px-5 -mt-12">
        <img
          class="h-32 w-32 bg-white p-2 rounded-full"
          src="./assets/img/headshot.jpg"
          alt=""
        >
      </div>
      <div class="mb-14">
        <div class="text-center px-14">
          <h2 class="text-gray-800 text-xl sm:text-3xl font-bold">
            Iqbal Tawakkal
          </h2>
          <h3
            class="text-gray-600 text-sm font-light"
          >
            Software engineer
          </h3>

          <div class="flex w-full justify-center mt-8 gap-4 text-gray-700">
            <a
              title="linkedin"
              role="button"
              href="https://www.linkedin.com/in/iqbaltawakkal1/"
              target="_blank"
              class="size-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              /></svg>
            </a>
            <a
              title="github"
              role="button"
              href="https://github.com/iqbaltawakkal"
              target="_blank"
              class="size-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              /></svg>
            </a>
            <a
              title="email"
              role="button"
              href="mailto:iqbaltawakkal1@gmail.com"
              target="_blank"
              class="size-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
              /></svg>
            </a>
          </div>
          <p class=" text-gray-500 text-sm my-10">
            Specialized in full-stack web development using listed technology stack. You can hire me for freelance project by clicking button below!
          </p>
          <a
            role="button"
            target="_blank"
            href="https://www.upwork.com/freelancers/~010ed10f98645c5e3f?viewMode=1&s=1110580755057594368"
            class="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            Hire me
          </a>
        </div>
      </div>
    </div>

    <div class="w-full block sm:hidden border-b border-gray-400 border-dashed mx-4" />

    <div class="w-full sm:max-w-xl">
      <NuxtMarquee
        pause-on-hover
        gradient
        class="filter grayscale mt-10 space-x-4"
      >
        <div class="h-10 mr-4 py-2">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/git.png"
          >
        </div>
        <div class="h-10 mr-4 ">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/vue.png"
          >
        </div>
        <div class="h-10 mr-4 ">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/htmljscss.png"
          >
        </div>
        <div class="h-10 mr-4 py-2">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/nuxt.png"
          >
        </div>
        <div class="h-10 mr-4 pb-2 pt-4">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/nextjs.png"
          >
        </div>
        <div class="h-10 mr-4 ">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/react.png"
          >
        </div>
        <div class="h-10 mr-4 ">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/tailwind.png"
          >
        </div>
        <div class="h-10 mr-4 ">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/ionic.png"
          >
        </div>
        <div class="h-10 mr-4 py-2">
          <img
            class="h-full w-full object-cover"
            src="./assets/img/typescript.png"
          >
        </div>
      </NuxtMarquee>
    </div>
  </main>
</template>

<style>
html {
  font-family: Inter;
}
</style>
