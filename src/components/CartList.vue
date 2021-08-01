<template lang="">
  <div
    class="cart-list"
    v-for="(cart, index) in Object.values(currentCart)"
    :key="index"
  >
    <div class="cart-title">{{ cart.itemName }}</div>
    <div class="quantity-links">
      <a @click="changeQuantity(cart.itemId, 'add')" role="button">
        <fa-icon icon="arrow-circle-up" />
      </a>
      <a @click="changeQuantity(cart.itemId, 'remove')" role="button"
        ><fa-icon icon="arrow-circle-down"
      /></a>
    </div>
    <div class="item-price">{{ cart.price }}$ each</div>
    <div class="counts">Quantity: {{ cart.quantity }}</div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentCart"]),
  },
  methods: {
    ...mapMutations(["updateCartList"]),
    changeQuantity(itemId, action) {
      let payload = {};
      let { currentCart } = this;
      if (action === "add") {
        payload[itemId] = {
          ...currentCart[itemId],
          quantity: currentCart[itemId]?.quantity + 1,
        };
        this.updateCartList(payload);
      } else if (action === "remove" && currentCart[itemId].quantity > 1) {
        payload[itemId] = {
          ...currentCart[itemId],
          quantity: currentCart[itemId]?.quantity - 1,
        };
        this.updateCartList(payload);
      }
    },
  },
};
</script>
<style lang="scss">
.cart-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: start;
  padding: 20px;
  row-gap: 8px;
  @media (max-width: 1024px) {
    padding: 20px 0;
  }
}
.cart-title {
  grid-column: 1 / span 4;
}
.quantity-links {
  grid-column: 5 / span 2;
  justify-self: end;
  a {
    padding: 0 3px;
    cursor: pointer;
  }
}
.item-price {
  grid-column: 1 / span 3;
  font-weight: bold;
  color: #06ae8e;
}
.counts {
  grid-column: 4 / span 3;
  justify-self: end;
}
</style>
