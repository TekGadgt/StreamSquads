export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'StreamSquads',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuesax/dist/vuesax.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vuesax'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api',
    '@nuxtjs/svg',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/date-fns',
    '@nuxt/image',
    '@nuxtjs/mdx',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FireBaseAPIKey,
          authDomain: process.env.FireBaseAuthDomain,
          projectId: process.env.FireBaseProjectID,
          storageBucket: process.env.FireBaseStorageBucket,
          messagingSenderId: process.env.FireBaseMessageingSenderID,
          appId: process.env.FireBaseAppID,
          measurementId: process.env.FireBaseMeasurementID,
        },
        services: {
          auth: false, // Just as example. Can be any other service.
        },
      },
    ],
    [
      'nuxt-stripe-module',
      {
        publishableKey: process.env.StripePublishableKey,
      },
    ],
    'nuxt-feature-toggle',
  ],

  publicRuntimeConfig: {
    featureToggle: {
      toggles: {},
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
