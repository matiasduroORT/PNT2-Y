    <template>
    
        <div>
            <h4>Hola {{mensaje}}</h4>
            <Alumnos nombre="Matias"/>
        </div>
    
    </template>
<script>
    import Alumnos from './Alumnos.vue'
    export default{
        components:{
            Alumnos
        },
        props:{
            mensaje: String
        }
    }

</script>

  
<style scoped>

</style>
  