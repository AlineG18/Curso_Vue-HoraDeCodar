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
  </div>
</template>

<script>
export default {
  name: "Info",
  data(){
    return{
      esta_trabalhando: false,
      mostrar_email: true,
      email: 'aline.09@outlook.com'
    }
  }
};
</script>