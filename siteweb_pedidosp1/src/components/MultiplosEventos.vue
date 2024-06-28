<template>
  <div>
    <button @click="primeiro(txt1,$event),segundo($event),terceiro()">Ativar múltiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: "",
      txt1: "Primeiro Evento"
    }
  },
  methods:{
    primeiro(txt1,e){
        this.multiplos_eventos = txt1;
     },
    segundo(e){
        setTimeout(()=> this.multiplos_eventos = "Segundo evento ativado!",900)
    },
    terceiro(){
        setTimeout(()=> this.multiplos_eventos = "",1500)        
    }
  }
}
</script>

<style scoped>
div {
  margin: 100px;
}
</style>