<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-todo">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-list lines="full">
      <ion-item v-for="todo in JsonTodo" :key="todo.id" @click="viewTodo(todo)">
        <ion-label color="primary">{{todo.name}}</ion-label>
        <ion-icon color="primary" name="arrow-forward"></ion-icon>
      </ion-item>
    </ion-list>
    <ion-fab-button size="small" class="todo-fab">Mini</ion-fab-button>
    <ion-button class="fancy-button" @click="addTodo">add todo</ion-button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  /* --ion-color-primary: red; */
}
.todo-fab {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
.toolbar-todo {
  color: white;
  --background: #3880ff;
}

.fancy-button {
  /* --color: rgb(255, 0, 0);
  --background: red; */
}
</style>

<script>
export default {
  name: "Todo",
  props: {},
  data: function() {
    return {
      JsonTodo: [
        {
          id: 1,
          name: "Make awesome applications"
        },
        {
          id: 2,
          name: "Play squash"
        },
        {
          id: 3,
          name: "Deadlift"
        },
        {
          id: 4,
          name: "Squat"
        }
      ]
    };
  },
  methods: {
    viewTodo(todo) {
      console.log(todo.name);
      this.$router.push("/TodoView/" + todo.id);
    },
    addTodo() {
      this.JsonTodo.push({ id: this.JsonTodo.length + 1, name: "new todo" });
    }
  }
};
</script>
