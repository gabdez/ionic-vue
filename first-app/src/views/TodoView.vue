<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-todo">
        <ion-button fill="outline" size="small" slot="start" @click="backTodos" class="backButton">
          <ion-icon name="arrow-back"></ion-icon>back
        </ion-button>
        <ion-title>{{todo.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ViewTodo :todo="todo"/>
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
  mounted() {},
  methods: {
    backTodos: function() {
      this.$router.go(-1);
    }
  },
  computed: {
    todo: function() {
      return this.$store.getters.getTodoById(this.$route.params.id);
    }
  }
};
</script>
