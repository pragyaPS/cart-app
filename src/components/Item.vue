<template lang="">
  <div class="item-section">
    <div class="item-title">
      <a @click="redirectToProduct(item.itemId)" class="anchor" role="button">{{
        item.itemName
      }}</a>
    </div>
    <div class="add-to-cart-button">
      <button @click="handleAddToCart()" class="primary button cart">
        Add to cart
      </button>
    </div>
    <div class="item-description">{{ item.itemDescription }}</div>
    <div class="item-price">$ {{ item.price }}</div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
//import { isEmptyObject } from "../utils/utils";
export default {
  props: {
    item: Object,
  },
  computed: mapGetters(["currentCart"]),
  methods: {
    ...mapMutations(["updateCartList", "updateSelectedItem"]),
    ...mapActions(["addToCart"]),

    handleAddToCart() {
      this.addToCart(this.item);
    },
    redirectToProduct(itemId) {
      this.$router.push({ path: `/product/${itemId}` });
      this.updateSelectedItem(this.item);
    },
  },
};
</script>
<style lang="scss" scoped>
.item-section {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  background-color: white;
  justify-items: flex-start;
  padding: 20px;
}
.button {
  &.cart {
    padding: 5px 8px;
  }
}
.item-title {
  grid-column: 1 / span 7;
  font-weight: 900;
}
.add-to-cart-button {
  grid-column: 8 / span 2;
  justify-self: end;
}
.item-description {
  grid-column: 1 / span 9;
  text-align: left;
}
.item-price {
  grid-column: 1 / span 9;
  color: #06ae8e;
  font-weight: bold;
  font-size: 17px;
  padding-top: 4px;
}
</style>
