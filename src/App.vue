
<template>
  <div id="max-container" class="container">
    <div class="row">
      <div class="col-md-2">
        <ul class="nav nav-pills nav-stacked">
          <li><a><router-link to="/add-news">添加新闻</router-link></a></li>
          <li><a><router-link to="/manage-news">管理新闻</router-link></a></li>
          <li><a><router-link to="/add-module">添加模块</router-link></a></li>
          <li><a><router-link to="/manage-module">管理模块</router-link></a></li>
        </ul>
      </div>
      <div class="col-md-8" >
        <router-view/>
          <!--
          v-bind:moduleList="moduleList"
          v-bind:newsList="newsList"
          v-bind:header="header"
          v-on:addModule="onAddModule"
          v-on:reviseModule="onReviseModule"
          v-on:deleteModule="onDeleteModule"
          v-on:addNews="onAddNews"
          v-on:deleteNews="onDeleteNews"
          v-on:reviseNews="onReviseNews"
          -->

      </div>
    </div>


  </div>


</template>

<script>
export default {
  name: 'App',
 // props:['moduleList','news-list','header'],
  /**
  methods:{
      onAddModule:function(data){
        this.$emit('addModule',data)
      },
      onReviseModule:function (data) {
          this.$emit('reviseModule',data)
        console.log('进行数据的回传')

      },
      onDeleteModule:function (data) {
          this.$emit('deleteModule',data)
      },
    onAddNews(data){
          this.$emit('addNews',data)
    },
    onDeleteNews(data){
        this.$emit('deleteNews',data)
    },
    onReviseNews(data){
        this.$emit('reviseNews',data)
    },
    ...mapMutations({
      add:'increment'
    })

  }

   **/
}
</script>

<style>

  #max-container{
    width: 100%;
  }

  ul{
    margin-top: 40px;
    margin-left: 20px;
  }


</style>
