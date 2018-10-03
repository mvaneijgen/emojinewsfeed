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
      { rel: "icon", type: "image/x-icon", href: "/fullpage.min.css" },
      // { rel: "stylesheet", href: "/favicon.ico" },
    ],
    script: [{ src: "/fullpage.min.js" }],
  },
  modules: ["@nuxtjs/axios"],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {},
};
