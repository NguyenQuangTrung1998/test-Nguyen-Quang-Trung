<template>
  <div id="home">
   <h1>Home</h1>
  <div class="showInfo" 
  v-for="(x,index) in data"
  @click="detail(x)"
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
    detail(x){
      this.$router.push('/DetailBlog/'+'title:'+' '+x.title +' '+'description:'+' '+ x.description);
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
