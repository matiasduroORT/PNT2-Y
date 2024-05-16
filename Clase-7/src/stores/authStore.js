import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        login(username, password){
            if(username ==="admin" && password === "admin"){
                this.isAuthenticated = true;
                this.user = { username }
                localStorage.setItem('isAuthenticated', 'true');
              }else{
                alert('Usuario no válido')
              } 
        },
        register(username, email, password){
            if(username && email && password){
                this.isAuthenticated = true;
                this.user = { username, email, password}
                localStorage.setItem('isAuthenticated', 'true');
            }else{
                alert('Completa todos los datos')
            }
        },
        logout(){
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem('isAuthenticated');
        },
        checkAuth(){
            this.isAuthenticated = localStorage.getItem('isAuthenticated' === true);
            if(this.isAuthenticated){
                this.user = {username: 'admin'}
            }
        }
    }
})