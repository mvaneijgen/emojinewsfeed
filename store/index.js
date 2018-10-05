import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      loaded: false,
      errors: [],
      title: "Emoji News Feed",
      by: "Lilian Stolk",
      description:
        "Emoji staat sinds 2014 standaard op onze telefoons geïnstalleerd. Het komt oorspronkelijk uit Japan en dat de figuren op de iPhone staan was in eerste instantie vooral voor Japanse gebruikers bedoeld. Nu de hele wereld emoji gebruikt wil ook de hele wereld zich gerepresenteerd zien. Die discussie, over wat er op het toetsenbord staat en hoe dat eruit ziet/moet zien, wil ik met die newsfeed laten zien. Van de kaas die verkeerd ligt op Google’s burger emoji. Tot transgenders die de kreeft-emoji gebruiken, omdat de transgendervlag nog niet door de selectie is gekomen.",
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
