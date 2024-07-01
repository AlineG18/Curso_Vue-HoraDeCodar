<template>
  <div>
    <h2>Esta é a descriçao da pessoa {{ nome }}</h2>
    <Info :email="email"/>
    <Forms/>
  </div>
</template>

<script>
import Forms from "./Forms.vue";
import Info from "./Info.vue"

export default {
  name: "Pessoa",
  components: {
    Info,
    Forms
  },
  data() {
    return {
      nome: "Aline",
      email: "aline2.09@outlook.com"
    }
  }
}
</script>