// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@vueuse/nuxt"],

  typescript: {
    typeCheck: true,
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  css: ["@/assets/scss/main.scss"],

  icon: {
    customCollections: [
      {
        prefix: "app-icon",
        dir: "./app/assets/app-icons",
      },
    ],
  },

 vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
});
