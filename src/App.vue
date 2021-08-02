<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/product">Product</router-link> |
    <button @click="handleLogout">logout</button>
  </div>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (
          route.path === "/login" ||
          route.path === "/" ||
          route.path === "/register"
        ) {
          router.replace("/home");
        }
      });
    });

    const handleLogout = () => {
      firebase.auth().signOut();
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
