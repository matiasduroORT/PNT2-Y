<template lang="">
    <div>
        <h2>Sistema</h2>
        <ul>
            <li v-for="item in lista">{{item.nombre}}</li>
        </ul>
        <Boton @agregarItem="agregarElemento" />
    </div>
</template>
<script>

import Boton from './Boton.vue';

export default {
    components: {
    Boton,
    },
    data(){
        return {
            lista: [{nombre:'hola'}],
        }
    },
  methods: {
    agregarElemento(elemento) {
      this.lista.push(elemento);
    },
  },
};
</script>
<style lang="">
    
</style>