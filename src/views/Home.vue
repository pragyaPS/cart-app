<template>
  <div class="main-section">
    <Cart />
    <div class="product-list">
      <div class="user-profile-icon">
        <fa-icon class="icon" icon="user" />
      </div>
      <div v-for="item in itemList" :key="item.itemId">
        <Item :item="item" />
      </div>
      <div class="item-count"># of products: {{ itemList?.length }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Item.vue";
import Cart from "../components/Cart.vue";
export default {
  name: "Home",
  components: {
    Item,
    Cart,
  },
  methods: {
    ...mapActions(["fetchItemList"]),
  },
  computed: mapGetters(["itemList"]),

  created() {
    this.fetchItemList();
  },
};
</script>
<style lang="scss" scoped>
.main-section {
  display: grid;
  grid-template-columns: minmax(min-content, 20%) 1fr;
  margin: 0 50px;
  gap: 20px;
  /* background-color: #dfe5f3; */
  @media (max-width: 1024px) {
    grid-template-columns: minmax(min-content, 30%) 1fr;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
}
.product-list {
  background-color: white;
}
.item-count {
  text-align: right;
  padding: 20px;
  font-weight: bold;
}
.user-profile-icon {
  text-align: center;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  .icon {
    font-size: 22px;
  }
}
</style>
