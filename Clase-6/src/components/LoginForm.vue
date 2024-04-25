<template lang="">
    <div class="login-form-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login-form">
            <input v-model="username" type="text" placeholder="username" class="login-input"/>
            <input v-model="password" type="password" placeholder="password" class="login-input"/>
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
                alert('Usuario no valido')
            } 
        }
    },
    // setup(){
    //     const username = ref('')
    //     const password = ref('')

    //     function login(){
    //         if(this.username ==="admin" && this.password === "admin"){
    //             localStorage.setItem('isAuthenticated', 'true');
    //             this.$router.push({ name: 'Perfil'})
    //         }else{
    //             alert('Usuario no valido')
    //         } 
    //     }
    // }
}
</script>
<style scoped>
  .login-form-container {
    max-width: 300px;
    margin: auto;
    padding: 2rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .login-input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    padding: 0.5rem;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .login-button:hover {
    background-color: #555;
  }
  </style>