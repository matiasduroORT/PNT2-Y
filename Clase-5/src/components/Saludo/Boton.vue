<template lang="">
    <div>
        <button @click="agregarElemento">Agregar un elemento</button>
    </div>
</template>
<script>
export default {
    methods:{
        agregarElemento(){
            const nuevoElemento ={
                id: Math.random(),
                nombre: 'Nuevo Item'
            }
            this.$emit('agregarItem', nuevoElemento)
        },
    }
}
</script>
<style lang="">
    
</style>