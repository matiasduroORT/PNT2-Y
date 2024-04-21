<template lang="">
    <div>
        <h1>Sistema</h1>
        <Detail @agregarEvento="agregarElemento"/>
        <ul>
            <li v-for="item in lista" :key="item.id">{{item.nombre}}</li>
        </ul>
    </div>
</template>
<script>
import Detail from "./Detail.vue";

export default {
    components:{
        Detail
    },
    data(){
        return{
            lista:[]
        }
    },
    methods:{
        agregarElemento(elemento){
            this.lista.push(elemento);
        }
    }
}
</script>
<style lang="">
    
</style>