<template lang="">
    <div>
        <h3>Detalle</h3>
        <button @click="agregar">Agregar Detalle</button>
    </div>
</template>
<script>
export default {
    
    methods:{
        agregar(){
            const elemento ={
                id: Math.random(),
                nombre: 'Elemento Nuevo'
            };
            this.$emit('agregarEvento', elemento)
        }
    }
}
</script>
<style lang="">
    
</style>