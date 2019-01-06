<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <ion-checkbox checked></ion-checkbox>
      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input class="red"></ion-input>
      </ion-item>
  </div>
</template>

<style scoped>
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
