<template>
  <div class="login-form-container">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" type="text" placeholder="Username" class="login-input"/>
      <input v-model="password" type="password" placeholder="Password" class="login-input"/>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    login(){
      if(this.username ==="admin" && this.password === "admin"){
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push({ name: 'Perfil'})
      }else{
        alert('Usuario no válido')
      } 
    }
  }
}
</script>

<style scoped>
.login-form-container {
  max-width: 500px; /* Aumentar el tamaño máximo del contenedor */
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.login-button {
  padding: 0.75rem;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}

.login-button:hover {
  background-color: #555;
}
</style>
