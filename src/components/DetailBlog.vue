<template>
  <div id="detail">
   <h1>detail</h1>
   {{id}}
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
     id:this.$route.params.id,
    }
  },
  watch:{
    '$route'(to, from){
      this.id=to.params.id;
    }
  }
}
</script>

<style>
#detail {
  
}
</style>
