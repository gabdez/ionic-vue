import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
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
  },
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id == id);
    }
  },
  mutations: {
    addTodo(state) {
      state.todos.push({
        id: state.todos.length + 1,
        name: "new todo"
      });
    }
  },
  actions: {}
});
