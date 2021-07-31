<template lang="">
  <div class="cart-list">
    <div class="cart-title">The Fullstack hoodie</div>
    <div class="quantity-links">
      <a @click="changeQuantity('add')" role="button">
        <fa-icon icon="arrow-circle-up" />
      </a>
      <a @click="changeQuantity('remove')" role="button"><fa-icon icon="arrow-circle-down" /></a>
    </div>
    <div class="item-price">19.99$ each</div>
    <div class="counts">Quantity: 2</div>
  </div>
</template>
<script>
export default {
    methods: {
        changeQuantity: (action) => {
            console.log("changeQuantity", action);
        }

    }
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
