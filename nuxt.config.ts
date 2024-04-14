// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  devtools: { enabled: true },
  vue: {
    propsDestructure: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
