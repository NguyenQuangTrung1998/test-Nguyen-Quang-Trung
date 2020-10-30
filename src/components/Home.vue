<template>
  <div id="home">
   <h1>Home</h1>
  <div class="showInfo" 
  v-for="(x,index) in data"
  @click="detail(index)"
   v-bind:key="index">
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
  },
  methods:{
    detail(index){
      this.$router.push('/DetailBlog/'+index);
    }
  }
}
</script>

<style>
.showInfo{
  cursor: pointer;
  margin-top: 10px;
  border-bottom: solid 1px #dedede;

}
p{
  margin-bottom: 10px;
}

</style>
