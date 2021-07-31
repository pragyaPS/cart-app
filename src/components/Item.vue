<template lang="">
  <div class="item-section">
    <div class="item-title">{{ item.itemName }}</div>
    <div class="add-to-cart-button">Add to cart</div>
    <div class="item-description">{{ item.itemDescription }}</div>
    <div class="item-price">{{ item.price }}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style lang="scss" scoped>
.item-section {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  background-color: white;
  justify-items: start;
  padding: 20px;
}
.item-title {
  grid-column: 1 / span 7;
}
.add-to-cart-button {
  grid-column: 8 / span 2;
  justify-self: end;
}
.item-description {
  grid-column: 1 / span 9;
}
</style>
