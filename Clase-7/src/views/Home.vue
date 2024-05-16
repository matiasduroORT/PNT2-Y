<template>
    <div>
        <h1>Hola Home</h1>
        <div class="product-list">
            <Producto v-for="product in productos" :key="product.id" :product="product" />
        </div>
    </div>
</template>
<script>

import Producto from '../components/Producto.vue'
import { useProductStore } from '../stores/productStore.js'

export default {
    components: {
        Producto
    },
    data(){
        return {
            productos: []
        }
    },
    methods: {
        // Llamar Productos
        fetchProductos(){
            const productStore = useProductStore();
            productStore.fetchProductos().then(() => {
                this.productos = productStore.productos
            })
        }
    },
    mounted(){
        this.fetchProductos();
    }
    
}
</script>
<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>