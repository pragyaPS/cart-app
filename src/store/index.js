import { createStore } from "vuex";
import itemList from "./mockdata.json";

export default createStore({
  state: {
    itemList: [],
  },
  getters: {
    itemList: (state) => state.itemList,
  },
  mutations: {
    updateItemList: (state, payload) => {
      state.itemList = payload;
    },
  },
  actions: {
    async fetchItemList({ commit }) {
      let response = await Promise.resolve(itemList);
      commit("updateItemList", response);
    },
  },
  modules: {},
});
