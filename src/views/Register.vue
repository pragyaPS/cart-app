<template lang="">
  <div>
    <p>Register</p>
    <form @submit.prevent="handleRegister">
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleRegister = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      email,
      password,
      handleRegister,
    };
  },
};
</script>
<style lang=""></style>
