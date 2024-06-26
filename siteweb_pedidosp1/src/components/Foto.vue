<template>
  <img :src="avatar" :alt="descricao" />
</template>

<script>
export default {
  name: 'Foto',
  data() {
    return {
    avatar: "/img/avatar.png",
    descricao: "Aline Garcia"
    }
  }
}
</script>