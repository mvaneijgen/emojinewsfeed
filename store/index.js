import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      errors: [],
      title: "Emoji News Feed",
      by: "Mitchel van Eijgen",
      description: "",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
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
