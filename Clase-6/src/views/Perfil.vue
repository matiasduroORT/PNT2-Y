<template>
    <div>
        <div>
            <h2>Perfil</h2>
            <ul>
                <li><strong>Nombre: </strong>{{user.Nombre}}</li>
                <li><strong>Materia: </strong>{{user.Materia}}</li>
                <li><strong>Instituo: </strong>{{user.Academia}}</li>  
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                "Nombre":'Matias',
                "Materia":"PNT2",
                "Academia":"ORT"
            }
        }
    },
    mounted(){
        if(!localStorage.getItem('isAuthenticated')){
            this.$router.push({ name: 'Login'})
        }
    }
}
</script>
<style>
    
</style>