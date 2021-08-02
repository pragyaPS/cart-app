<template lang="">
  <div class="register-container">
    <div>Register</div>
    <form class="login-form" @submit.prevent="handleRegister">
      <label class="form-input">
        <input type="text" v-model="email" />
      </label>
      <label class="form-input">
        <input type="password" v-model="password" />
      </label>

      <button class="primary button" type="submit">Register</button>
    </form>
  </div>
</template>
<script>
import { ref, onUnmounted } from "vue";
import firebase from "firebase";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const store = useStore();
    onUnmounted(() => {
      email.value = "";
      password.value = "";
    });

    const handleRegister = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          console.log(userCredential);
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
      handleRegister,
    };
  },
};
</script>
<style lang="scss">
.register-container {
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
