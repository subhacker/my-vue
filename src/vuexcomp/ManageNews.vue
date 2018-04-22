<template>

  <div id='manage-news'>
    <table class='table'>
      <thead>
      <tr >
        <th  v-for="item in header"  v-bind:class="item.classProps">{{item.name}}</th>
      </tr>
      </thead>
      <tbody v-on:click="onNewsChange($event)">

      <tr  v-for="item in newsList">
        <td class='index'>1</td>
        <td class='title'><span>{{item.title}}</span></td>
        <td class='module'>{{item.module}}</td>
        <td class='author'>{{item.author}}</td>
        <td class='time'>{{item.time}}</td>
        <td class='times'>{{item.visitTime}}</td>
        <td  class='operate'  >
          <button v-bind:data-newsid="item.newsId"  class='btn btn-default btn-sm'>修改</button>
          <button v-bind:data-newsid="item.newsId"  class='btn btn-default btn-sm'>删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    name: 'ManageNews',
 // props:['header','newsList'],
    data () {
      return {
      }
    },
    computed:mapState({
     header:state=>state.header,
      newsList:state=>state.newsList
    }),
    methods:{
      onNewsChange:function (ev) {
          ev.preventDefault();
          if(ev.target.innerHTML==='修改'){
            let newsId=ev.target.dataset.newsid;
            this.$router.push({ path: 'revise-news', query: { newsId: newsId }})
              return
          }

          if(ev.target.innerHTML==='删除'){
              let newsId=ev.target.dataset.newsid;
             // this.$emit('deleteNews',newsId)
            this.deleteNews(newsId)
          }


      },
    ...mapMutations({
      deleteNews:'deleteNews'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #manage-news{
    margin-left: 10px;
    margin-top: 20px;
  }

  #manage-news button{
    margin-left: 2px;
    padding-left: 3px;
    padding-right: 3px;
  }

  tbody{
    height: 20px;
  }

  tr{
    height: 200px;
  }
  #manage-news tr{
    height: 10px;
  }
  .index{
    width: 40px;
  }
  .title{
    width: 200px;
    height: 20px;
    overflow: hidden;
  }
  .module{
    width: 40px;
  }
  .author{
    width: 40px;
  }
  .time{
    width: 40px;
  }
  .times{
    width: 65px;
  }
  .operate{
    width: 75px;
  }

</style>
