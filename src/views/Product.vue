<template lang="">
  <div class="product-container">
    <div class="product-section">
      <div class="product-details">
        <a @click="redirectToHome()" class="back-to-home anchor">
          <fa-icon class="icon" icon="arrow-left" />
        </a>

        <div class="product-title">{{ selectedItem.itemName }}</div>
        <div class="product-category">{{ selectedItem.category }}</div>
        <div class="product-description">
          {{ selectedItem.itemDescription }}
        </div>
        <div class="product-estd">
          founded: <strong>{{ selectedItem.founded }}</strong>
        </div>
        <div class="addtocart-btn">
          <button @click="handleAddToCart()" class="button primary">
            Add to cart
          </button>
        </div>
      </div>
      <div :style="backgroundStyle" class="product-img" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["addToCart"]),
    redirectToHome() {
      this.$router.back();
    },
    handleAddToCart() {
      this.addToCart(this.selectedItem);
      console.log("Add to cart");
    },
  },
  computed: {
    ...mapGetters(["selectedItem", "currentCart"]),
    backgroundStyle() {
      return `background-image: url(${this.selectedItem.imageUrl})`;
    },
  },
};
</script>
<style lang="scss">
.product-img {
  width: 200px;
  height: 200px;
  /* background-image: url("../assets/fullstack-hoodie.png"); */
  background-size: cover;
  justify-self: center;
  align-self: center;
}
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40vw;
  background-color: white;
}
.product-title,
.product-category,
.product-description,
.product-estd,
.addtocart-btn {
  margin-left: 15px;
}
.product-details {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: flex-start;
}
.product-title {
  font-weight: bold;
  font-size: 22px;
}
.product-category {
  background: #ccc;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 5px;
}

.back-to-home {
  align-self: flex-start;
  .icon {
    color: #06ae8e;
  }
}
.product-description {
  text-align: left;
  padding: 20px 0 0;
}
.product-estd {
  padding: 10px 0;
  font-size: 12px;
}
</style>
