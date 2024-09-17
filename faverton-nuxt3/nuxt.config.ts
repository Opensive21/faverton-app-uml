// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: `page`, mode: `out-in` },
  },
  modules: [`@nuxt/eslint`, `@nuxt/ui`, `@tresjs/nuxt`, `@nuxt/devtools`],
  tres: {
    glsl: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },

  colorMode: {
    preference: `light`,
  },

  compatibilityDate: `2024-04-03`,
});
