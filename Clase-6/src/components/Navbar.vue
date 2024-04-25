<template lang="">
    <nav class="navbar">
      <div class="nav-container">
        <a class="navbar-brand" href="#">PNT2</a>
        <ul class="nav-list">
            <li class="nav-item">
                <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
                <router-link class="nav-link" to="/perfil">Perfil</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
                <button @click="logout" class="nav-link" style="background: none; border: none; cursor: pointer;">Logout</button>
            </li>
            <li class="nav-item" v-else>
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
        </ul>
      </div>  
    </nav>
</template>
<script>
import { useRouter } from 'vue-router'; 
import { computed } from 'vue';

export default {
    setup(){
        const router = useRouter();
        const isAuthenticated = computed(() => localStorage.getItem('isAuthenticated') === 'true')
        
        function logout(){
            localStorage.removeItem('isAuthenticated');
            router.push({name:'Home'})
        }
        return {
            isAuthenticated, logout
        }
    },
    
}
</script>
<style scoped>
    .navbar {
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-item {
    margin-left: 1rem;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  
  .nav-link:hover {
    background-color: #555;
  }
  
  .navbar-brand {
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
</style>