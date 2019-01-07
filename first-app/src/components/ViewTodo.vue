<template>
  <div>
    <ion-item>
      <ion-label position="floating" class="floating-label">name</ion-label>
      <ion-input clear-input :value="todo.name" @blur="updateName($event)"></ion-input>
    </ion-item>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.floating-label {
  color: #3880ff;
}
</style>

<script>
export default {
  name: "ViewTodo",
  props: ["todo"],
  data: function() {
    return {};
  },
  mounted() {},
  methods: {
    updateName: function($event) {
      this.todo.name = $event.target.value;
    }
  }
};
</script>
