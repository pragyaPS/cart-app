<template lang="">
    <div class="cart-section">
        <div class="cart-icon">
<fa-icon class="icon" icon="shopping-cart"/>

        </div>
        <CartList />
        <div class="cart-meta-info">
            <div>Total Quantity: 2</div>
            <a role="button" class="remove-all" @click="handleRemoveAll()"><fa-icon class="icon" icon="trash-alt"/>Remove all</a>
        </div>
        <div class="checkout-button">
            <button class="button primary checkout-btn">Checkout ($39.98)</button>
        </div>
        
    </div>
</template>
<script>
import CartList from "../components/CartList.vue";
export default {
    methods: {
        handleRemoveAll: () => {
            console.log("remove all");
        }
    },
    components: {
        CartList
    }
    
    
}
</script>
<style lang="scss">
.cart-icon {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    margin: 0 20px;
    .icon {
        font-size: 22px;
    }
}
.cart-meta-info {
    font-size: 12px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  @media (max-width: 1024px) {
    padding: 20px 0;
  }
}
.remove-all {
    cursor: pointer;
    .icon {
        margin: 0 5px;
    }
}
.checkout-btn {
    font-size: 16px;
}

    
</style>