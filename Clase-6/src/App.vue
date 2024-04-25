<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" class="app-container">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
    <h1>Footer</h1>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  background-color: #414040; 
}

#app {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex-grow: 1; 
  background-color: #fff; 
  padding: 20px; 
}

@media (min-width: 768px) {
  .content {
    padding: 40px;
  }
}
</style>
