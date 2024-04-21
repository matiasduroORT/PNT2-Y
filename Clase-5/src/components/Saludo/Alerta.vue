<template lang="">
    <div>
        <h4>Alerta</h4>
        <button @click="emitirAlerta">Enviar mensaje de alerta</button>
    </div>
</template>
<script>
export default {
    methods:{
        emitirAlerta(){
            this.$emit('eventoDelAlerta', "Alerta 123")
        }
    }
}
</script>
<style lang="">
    
</style>