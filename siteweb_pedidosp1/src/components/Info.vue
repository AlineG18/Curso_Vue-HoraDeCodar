<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando nomomento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>Pyton</li>
    </ul>
    <p v-show="mostrar_email">Envie um e-mail para: {{ email }}</p>
    <p>Para acessar meu portifólio<a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
    <Foto />
  </div>
</template>

<script>
import Foto from "./Foto.vue";

export default {
  name: "Info",
  components: {
    Foto,
  },
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      email: "aline.09@outlook.com",
      meu_link: "https://google.com",
    }
  }
}
</script>