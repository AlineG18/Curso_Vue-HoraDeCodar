<template>
  <div>
    <HeaderOne/>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import HeaderOne from "./components/HeaderOne.vue"
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";

export default {
  name: "App",
  components: {
    HeaderOne,
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
  }
}
</script>

<style>
body {
  background-color: #333;
  color: #FFF;
}
a{
  color: blue;
}
</style>