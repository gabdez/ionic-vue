import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    addTodo(state) {
      state.JsonTodo.push({
        id: state.JsonTodo.length + 1,
        name: "new todo"
      });
    }
  },
  actions: {}
});
