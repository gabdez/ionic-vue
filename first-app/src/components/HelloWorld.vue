<template>
  <div>
    <ion-fab-button class="todo-fab">
      <ion-icon name="checkmark"></ion-icon>
    </ion-fab-button>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    bonjour() {
      console.log("hello world");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-y {
  color: red;
  --background: yellow;
}
</style>
