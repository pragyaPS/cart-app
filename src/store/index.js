import { createStore } from "vuex";
import itemList from "./mockdata.json";
import axios from "axios";

const INITIAL_TOTAL = {
  quantity: 0,
  price: 0,
};
const getTotalFromCartList = (currentCart, total) => {
  console.log(total);
  let cartArr = Object.values(currentCart);
  let quantity = cartArr?.reduce(
    (acc, currentCart) => acc + currentCart.quantity,
    0
  );
  let price = cartArr?.reduce(
    (acc, currentCart) =>
      acc + currentCart.quantity * parseFloat(currentCart.price),
    0
  );
  return { quantity, price: parseFloat(price).toFixed(2) };
};
export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    itemList: [],
    currentCart: {},
    total: { ...INITIAL_TOTAL },
    selectedItem: {},
  },
  getters: {
    user: (state) => state.user,
    itemList: (state) => state.itemList,
    currentCart: (state) => state.currentCart,
    total: (state) => state.total,
    selectedItem: (state) => state.selectedItem,
  },
  mutations: {
    setUser: (state, payload) => {
      console.log("inside set user");
      state.user = payload;
    },
    updateItemList: (state, payload) => {
      state.itemList = payload;
    },
    updateCartList: (state, payload) => {
      let newcurrentCart = { ...state.currentCart, ...payload };
      state.currentCart = newcurrentCart;
      state.total = { ...getTotalFromCartList(newcurrentCart, state.total) };
    },
    resetCartList: (state) => {
      state.currentCart = {};
      state.total = { ...INITIAL_TOTAL };
    },
    updateTotal: (state, payload) => {
      state.total = { ...payload };
    },
    updateSelectedItem: (state, payload) => {
      state.selectedItem = payload;
    },
  },
  actions: {
    async fetchItemList({ commit }) {
      try {
        let response = await axios
          .get("https://us-central1-cart-app-auth.cloudfunctions.net/itemList")
          .then((res) => res.data);
        commit("updateItemList", response[0].itemList);
      } catch (err) {
        console.log("Error occurred while fetching firebase API", err);
        // Its a fallback mock json in case API fails
        let response = await Promise.resolve(itemList);
        commit("updateItemList", response);
      }
    },
  },
  modules: {},
});
