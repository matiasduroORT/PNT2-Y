<template lang="">
    <div>
        <h1>Tablero</h1>
        <Alerta @eventoDelAlerta="manejarEvento"/>
        <p v-if="mensajeDeAlerta">{{mensajeDeAlerta}}</p>
    </div>
</template>
<script>

import Alerta from './Alerta.vue'

export default {
    components:{
        Alerta
    },
    data(){
        return{
            mensajeDeAlerta: ''
        }
    },
    methods:{
        manejarEvento(mensaje){
            this.mensajeDeAlerta = mensaje
        }
    }
}
</script>
<style lang="">
    
</style>