const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          // base: "/emojinewsfeed/",
        },
      }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Emoji News Feed",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A collection of emoji news items showing how we currently defining and shaping this universal visual language",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Emoji News Feed" },
      {
        property: "og:description",
        content:
          "A collection of emoji news items showing how we currently defining and shaping this universal visual language",
      },
      { property: "og:url", content: "https://emojinewsfeed.com" },
      {
        property: "og:image",
        content: "https://emojinewsfeed.com/social.jpg",
      },
    ],
    manifest: {
      name: "Emoji News Feed",
      short_name: "Emoji News Feed",
      lang: "en",
      icons: [
        {
          src: "android-chrome-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
      ],
      theme_color: "#8f57ea",
      background_color: "#8f57ea",
      display: "standalone",
    },
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://emojinewsfeed.com/favicon.ico",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "fullpage.min.css" },
      // { rel: "stylesheet", href: "/favicon.ico" },
    ],
    script: [{ src: "fullpage.min.js" }],
  },
  router: {
    // base: "/emojinewsfeed/",
  },
  generate: {
    dir: "docs",
  },
  ...routerBase,
  css: ["@/assets/css/main.scss"],
  modules: ["@nuxtjs/axios"],
  axios: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#bd454b" },
  /*
  ** Build configuration
  */
  build: {},
};
