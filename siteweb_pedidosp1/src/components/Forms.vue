<template>
  <form action="" @submit="enviarFormulario($event)">
    <h2>Meu Formulário:</h2>
    <div>
      <input type="text" v-model="name" />
    </div>
    <div>
      <input type="text" v-model="email" />
    </div>
    <div>
      <Submit />
    </div>
  </form>
</template>

<script>
import InputText from "./forms/InputText.vue";
import Submit from "./forms/Submit.vue";
export default {
  name: "Forms",
  components: {
    InputText,
    Submit,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();

      const name = this.name;
      const email = this.email;

      console.log("Formulario enviado");
      console.log("E nome é:"+ name);
      console.log("E email é:" + email);

      // Ajax
      // Inserir no banco os dados
    },
  },
};
</script>