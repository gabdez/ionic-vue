<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-todo">
        <ion-button fill="outline" slot="start" @click="backTodos" class="backButton">
          <ion-icon name="arrow-back"></ion-icon>back
        </ion-button>
        <ion-title>{{$route.params.id}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ViewTodo/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.backButton {
  --color: white;
  --border-radius: 2px;
}
</style>

<script>
import ViewTodo from "@/components/ViewTodo.vue";
export default {
  name: "todoView",
  components: {
    ViewTodo
  },
  props: {},
  data: function() {
    return {};
  },
  mounted() {
    console.log("view -> TodoView");
  },
  methods: {
    backTodos: function() {
      this.$router.go(-1);
    }
  }
};
</script>
