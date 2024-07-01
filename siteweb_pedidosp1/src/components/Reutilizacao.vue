<template>
    <Div>
  <button @click="ativar">Clique aqui!</button>
  <span v-show="ativou">Ativado!</span>
</Div>
</template>

<script>
export default {
  name: "Reutilizacao",
  data() {
    return {
      ativou: false,
    }
  },
  methods: {
    ativar(){
        this.ativou = !this.ativou
    }
  }
}
</script>