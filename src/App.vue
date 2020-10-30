<template>
  <div id="app">
    <router-link to="/NewBlog">new Blog</router-link>
    <router-link to="/">Home</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  margin: 10px auto;
max-width: 1200px;
width: 100%;
}
a{
  margin-left: 10px;
  text-transform: capitalize;
  text-decoration: none;
  color:rgb(68, 63, 63);
  font-size: 18px;
}
h1{
  text-align: center;
}
</style>
