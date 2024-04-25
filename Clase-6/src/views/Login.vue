<template lang="">
    <div class="d-flex flex-column">
        <div style="background-color: black;">
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
<style scoped>
    div {
        color: white
    }
</style>