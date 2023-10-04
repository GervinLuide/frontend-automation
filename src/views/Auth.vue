<template>
  <div>
    <h2>Sisselogimine</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginForm.email" required>
      </div>
      <div>
        <label for="password">Parool:</label>
        <input type="password" id="password" v-model="loginForm.password" required>
      </div>
      <button type="submit">Logi sisse</button>
    </form>

    <h2>Registreerimine</h2>
    <form @submit.prevent="register">
      <div>
        <label for="registerEmail">Email:</label>
        <input type="email" id="registerEmail" v-model="registerForm.email" required>
      </div>
      <div>
        <label for="registerPassword">Parool:</label>
        <input type="password" id="registerPassword" v-model="registerForm.password" required>
      </div>
      <button type="submit">Registreeri</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {

      } catch (error) {
        console.error('Sisselogimine ebaõnnestus:', error);
      }
    },
    async register() {
      try {

      } catch (error) {
        console.error('Registreerimine ebaõnnestus:', error);
      }
    }
  }
};
</script>
