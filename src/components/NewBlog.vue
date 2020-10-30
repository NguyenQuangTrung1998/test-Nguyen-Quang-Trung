<template>
  <div id="newblog">
   <h1>
       New Blog
   </h1>
   <div class="blog">
     <input type="text" placeholder="Title" v-model="data.title"/>
     <textarea id="text" placeholder="Description" v-model="data.description"></textarea>
   </div>
   <button @click="add">Post</button>
   
  </div>
</template>

<script>
export default {
  name: 'newblog',
  data () {
    return {
      data:{title:'',description:''}
    }
  },
  methods:{
    add(){
      if(this.data.title===''){
        alert('Wrong title')
        return;
      }
      if(this.data.description===''){
        alert('Description does not exist');
        return;
      }
      this.$store.commit('addItem',this.data);
      this.data={};
    }
  }
}
</script>

<style>
#newblog {
  max-width: 1200px;
  width: 100%;
}
.blog{
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
}
textarea{
  min-height: 100px;
  margin-top: 5px;
  border: none;
}
input{
  border: none;
  border-bottom: solid 1px;
  min-height: 40px;
}
input:focus{
  outline: none;
}
textarea:focus{
  outline: none;
}
button{
  padding: 10px 30px;
}
</style>
