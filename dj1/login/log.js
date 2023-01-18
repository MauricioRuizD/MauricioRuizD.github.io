<template>
  <div>
    <form v-if="!loggedIn" @submit.prevent="handleRegistration">
      <h2>Register</h2>
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" v-model="password" required minlength="6" />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
    <form v-if="!loggedIn" @submit.prevent="handleLogin">
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" v-model="password" required minlength="6" />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
        <div v-if="loggedIn">
        <h2>Welcome, {{ email }}</h2>
        <button @click="handleLogout">Logout </button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        loggedIn: false
      };
    },
    methods: {
      async handleRegistration() {
        // send a post request to the server with email and password to register
        // handle the response, if successful, set loggedIn to true and store the token
      },
      async handleLogin() {
        // send a post request to the server with email and password to login
        // handle the response, if successful, set loggedIn to true and store the token
      },
      handleLogout() {
        // remove the token and set loggedIn to false
      }
    }
  };
  </script>
  