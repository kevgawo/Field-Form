<template>
  <div id="show-blogs">
    <h1>All posts</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h3>{{blog.title}}</h3>
      <p>{{blog.body}}</p>

    </div>
  </div>

</template>

<script>
    export default {
        name: "posts.vue",
      data(){
          return{
            blogs:[]
          }
      },
      methods:{

      },
      created(){
          this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs= data.body.slice(0,10);
          })
      }
    }
</script>

<style>
  #show-blogs{
      max-width: 800px;
      margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;

  }

</style>
