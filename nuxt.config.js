const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/emojinewsfeed/",
        },
      }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "emojinewsfeed",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "fullpage.min.css" },
      // { rel: "stylesheet", href: "/favicon.ico" },
    ],
    script: [{ src: "fullpage.min.js" }],
  },
  router: {
    base: "/emojinewsfeed/",
  },
  generate: {
    dir: "docs",
  },
  css: ["@/assets/css/main.scss"],
  modules: ["@nuxtjs/axios"],
  axios: {
    // proxyHeaders: false
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
