<template lang="">
  <div>
    <p>Login</p>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
    <p>Nee an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleLogin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          console.log(userCredential);
          router.replace("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>
<style lang=""></style>
