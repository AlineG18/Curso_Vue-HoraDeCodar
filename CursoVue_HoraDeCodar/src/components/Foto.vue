<template>
  <div>
  <MudarImg @mudar-imagem="trocarImagem"/>
  <img :src="avatar" :alt="descricao" />
</div>
</template>

<script>
import MudarImg from './MudarImg.vue';

export default {
  name: 'Foto',
  components:{
    MudarImg 
  },
  data() {
    return {
    avatar: "/img/avatar.png",
    descricao: "Aline Garcia",
    }
  },
  methods:{
    trocarImagem(){
      this.avatar = "/img/avatar2.png"
    }
  }
}
</script>