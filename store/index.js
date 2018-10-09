import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      loaded: false,
      errors: [],
      title: "Emoji News Feed",
      by: "Lilian Stolk",
      image: "https://i.imgur.com/dsJ23xG.png",
      description:
        "Emoji originated in Japan and have been installed as a standard international keyboard on our phones since 2012. Since they are used all over the world, the typically Japanese rice dishes in the food category, for instance, have been supplemented with tacos, broccoli and cheese. We are currently defining and shaping this universal visual language, which is a fascinating process.",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
        state.loaded = true;
        // state.currentItem = payload[0];
      },
      error(state, payload) {
        state.errors = payload;
      },
      description(state, payload) {
        state.description = payload;
      },
    },
  });
};

export default createStore;
