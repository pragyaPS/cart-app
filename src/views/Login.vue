<template lang="">
  <div class="login-container">
    <div>Login</div>
    <form class="login-form" @submit.prevent="handleLogin">
      <label class="form-input">
        email:
        <input type="text" v-model="email" />
      </label>
      <label class="form-input">
        password:
        <input type="password" v-model="password" />
      </label>
      <button class="primary button" type="submit">Login</button>
    </form>
    <p>Need an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const store = useStore();

    const handleLogin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          let payload = { email: userCredential?.user?.email };
          localStorage.setItem("user", JSON.stringify(payload));
          store.commit("setUser", payload);
          router.replace("/");
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
<style lang="scss">
.login-container {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.login-form {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
}
.form-input {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}
</style>
