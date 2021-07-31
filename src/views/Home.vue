<template>
  <div class="home">
    <div class="cart-section">cart-section</div>
    <div class="product-list">
      <div v-for="item in itemList" :key="item.itemId">
        <item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Item.vue";
export default {
  name: "Home",
  components: {
    Item,
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
.home {
  display: grid;
  grid-template-columns: minmax(min-content, 30%) 1fr;
  margin: 0 50px;
  background-color: #DFE5F3;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
}
.product-list{
  background-color: pink;
}
</style>
