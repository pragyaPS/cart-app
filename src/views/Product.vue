<template lang="">
  <div class="product-container">
    <div class="product-section">
      <div class="product-details">
        <a @click="redirectToHome()" class="back-to-home anchor">
          <fa-icon class="icon" icon="arrow-left"/>
        </a>
        
        <div class="product-title">Fullstack Hoodie</div>
        <div class="product-category">hoodies/jacket</div>
        <div class="product-description">Lightweight, breathable hoodie with the fullstack Crest. Guaranteed to keep you looking fresh while warm
        </div>
        <div class="product-estd">founded: <strong>2017</strong></div>
        <div class="addtocart-btn">
          <button class="button primary">Add to cart</button>
        </div>

      </div>
      <div class="product-img">
        <img src="../assets/fullstack-hoodie.png"/>
        

      </div>
    </div>
    
    
    
  </div>
</template>
<script>
export default {
  methods: {
    redirectToHome: () => {
      console.log("redirectToHome");
    }
  }
  
}
</script>
<style lang="scss">
.product-img {
  width: 200px;
  height: 200px;
}
.product-container {
  display: flex;
    justify-content: center;
    align-items: center;

}
.product-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45vw;
  background-color: white;


}
.product-title, .product-category, .product-description, .product-estd, .addtocart-btn {
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
