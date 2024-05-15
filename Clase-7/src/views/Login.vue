<template lang="">
    <div class="">
        <div style="background-color: white;">
            <LoginForm />
        </div>
    </div>
</template>
<script>
import LoginForm from "../components/LoginForm.vue";

export default {
    components: {
        LoginForm
    },
    mounted(){
        // setItem( Setea la llave y el valor)
        // getItem (Obtiene el valor de la llave, y el valor)
        if(localStorage.getItem('isAuthenticated')){
            this.$router.push({ name: 'Perfil' });
        }
    }
}
</script>
<style>
  
</style>