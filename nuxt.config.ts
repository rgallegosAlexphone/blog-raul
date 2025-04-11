// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  components: true,
  devtools: { enabled: true },

  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'blog-raul',
        owner: 'rgallegos',
        url: 'https://github.com/rgallegosAlexphone/blog-raul'
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-04-03',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
