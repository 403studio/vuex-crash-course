<template>
  <div id="app">
    <AddTodo/>
    <FilterTodo/>
    <Todos/>
  </div>
</template>

<script>
import store from "./store";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  store,
  components: {
    AddTodo,
    FilterTodo,
    Todos
  }
};
</script>

<style>
body {
  background: #cccccc;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 1100px;
  margin: 60px auto;
}
h3 {
  padding: 10px;
  margin: 0;
}
</style>
