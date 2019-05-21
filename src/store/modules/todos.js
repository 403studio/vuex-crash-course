import axios from "axios";

const state = {
  todos: []
};

const getters = {
  getAllTodos(state) {
    return state.todos;
  }
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  post(state, todo) {
    state.todos.unshift(todo);
  },
  delete(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  update(state, updatedTodo) {
    let index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    state.todos.splice(index, 1, updatedTodo);
  }
};

const actions = {
  async getAllTodos({ commit }) {
    const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, todo) {
    const res = await axios.post(
      "http://jsonplaceholder.typicode.com/todos",
      todo
    );
    commit("post", res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    commit("delete", id);
  },
  async filterTodos({ commit }, limit) {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", res.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(
      `http://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo
    );
    commit("update", updatedTodo);
  }
};

export default { state, getters, mutations, actions };
