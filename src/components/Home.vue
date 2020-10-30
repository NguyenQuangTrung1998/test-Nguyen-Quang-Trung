<template>
  <div id="home">
   <h1>Home</h1>
  <div class="showInfo" v-for="(x,index) in data" v-bind:key="index">
    <h3>
      Title: {{x.title}}
    </h3>
    <p>
     {{x.description}}
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      data: this.$store.state.listBlog
    }
  }
}
</script>

<style>
.showInfo{
  margin-top: 20px;
  border-bottom: solid 1px #dedede;
}
h3{
  margin-bottom: 10px;
}
h1{
  text-align: center;
}
a{
  margin-left: 10px;
  text-transform: capitalize;
  text-decoration: none;
  color:rgb(94, 88, 88);
  font-size: 18px;
}
</style>
