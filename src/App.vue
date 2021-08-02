<template>
  <div id="nav">
    <a @click="handleLogout">logout</a>
    <div class="icon-lables">
      <label class="shop-label"><fa-icon class="icon" icon="user" />shop</label>
      <label class="cart-label"
        ><fa-icon class="icon" icon="shopping-cart" /> 0</label
      >
    </div>
  </div>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import firebase from "firebase";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.setItem("user", null);
          store.commit("setUser", null);
          router.replace("/login");
        });
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dfe5f3;
  height: 100vh;
}
.button {
  padding: 8px 12px;
  min-width: 100px;
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;
  &.primary {
    border: none;
    background-color: #06ae8e;
    color: white;
    transition: background-color 0.2s linear, font-weight 0.2s linear;
    &:hover {
      background-color: #034a3d;
      color: white;
      font-weight: bold;
    }
    &:focus {
      outline: 3px solid #034a3d;
      outline-offset: 1px;
      font-weight: bold;
    }
    &:active {
      background-color: #034a3d;
      border-color: #034a3d;
      color: white;
      font-weight: bold;
    }
    &:disabled {
      background-color: #84fbe5;
      cursor: not-allowed;
    }
  }
}
.anchor {
  cursor: pointer;
}
#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;

  a {
    color: #2c3e50;
    cursor: pointer;
    text-decoration: underline;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icon-lables {
  display: flex;
  gap: 5px;
  .icon {
    margin-right: 3px;
  }
  .shop-label {
    background-color: white;
    padding: 5px 8px;
  }
  .cart-label {
    padding: 5px 8px;
    background-color: #06ae8e;
    color: white;
    border-radius: 4px;
  }
}
</style>
