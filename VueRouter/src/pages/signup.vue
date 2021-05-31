<template>
  <div class="signup">
    <h1>This is a signup page</h1>
    <div>
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
    </div>
    <div>
      <button @click="signup">signup</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'

export default {
  name: "signup",
  setup() {
    const username = ref('')
    const password = ref('')
    const signup = () => axios.post("/api/signup", { username: username.value, password: password.value });
    return { username, password, signup }
  }
};
</script>