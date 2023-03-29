export default {
  target: 'server',
  server: {
    port: 3000
  },
  css: [
    {
      src: '~/assets/style/global',
      rel: 'preload',
    },
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],
  modules: [
    '@nuxtjs/auth-next',
  ],
  build: {
    transpile: ['lodash-es'],
  },
}
