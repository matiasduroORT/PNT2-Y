import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        productos: [],
        cart: [] // Obtener del local Storage 
    }),
    getters: {
        cantidadCarrito: (state) => {
            return state.cart.reduce((total, item) => total + item.quantity, 0)
        },
        estaEnCarrito: (state) => (productId) => {
            return !!state.cart.find(item => item.id === productId);
        }
    },
    actions: {
        async fetchProductos(){
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                this.productos = data;
            } catch (error) {
                console.error('Fallo el fetch ', error)
            }
        }
    },
    agregarAlCarrito(producto){
        const productoEnCarrito = this.cart.find( item => item.id === producto.id);
        if(!productoEnCarrito) {
            this.cart.push({ ...producto, quantity: 1})
        } else {
            productoEnCarrito.quantity += 1;
        }
    },
    removerDelCarrito(producto){
        const productoEnCarrito = this.cart.find(item => item.id === producto.id)
        if(productoEnCarrito) {
            if(productoEnCarrito.quantity > 1){
                productoEnCarrito.quantity -= 1;
            } else {
                this.cart = this.cart.filter(item => item.id !== producto.id)
            }
        }
    }

})