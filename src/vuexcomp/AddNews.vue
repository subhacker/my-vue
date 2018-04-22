<template>
  <div id='add-news'>
    <div v-if="!hasSubmit" >
      <h3>添加模块</h3>
      <form id='form' class='form-horizontal' v-on:submit="onSubmit($event)">
        <div class="form-group">
          <label class='col-md-2 control-label' for="newsTitle">新闻标题<span class='requireDot'>*</span></label>
          <input  type='text' class="form-control input-sm col-md-5" id="newsTitle" v-model="newsTitle"  />
          <span v-if="dummyNewsTitle"  class='err-message '>标题不得为空</span>
        </div>
        <div class="form-group">
          <label class='col-md-2 control-label' for="newsOption">模块序号<span class='requireDot'>*</span></label>
          <select id='newsOption'   class='form-control input-sm col-md-5' v-model="newsOption">
            <option value="none">请选择</option>
            <option v-for="item in moduleList" v-bind:key="item.moduleIndex" v-bind:value="item.moduleName" >{{item.moduleName}}</option>
          </select>
          <span v-if="dummyNewsOption"   class='err-message col-md-2'>请指定模块</span>

        </div>
        <div class="form-group">
          <label class='col-md-2 control-label' for="newsContent">新闻内容<span class='requireDot'>*</span></label>
          <textarea rows='12'  class="form-control col-md-5 " id="newsContent"  v-model="newsContent" ></textarea>
          <span v-if="dummyNewsContent" class='err-message col-md-2'>内容不能为空</span>
        </div>

        <button id='add-news-button'   type="submit" class="btn btn-default">添加</button>
      </form>
    </div>

    <div id='add-news-prev'  class='container' v-if="hasSubmit">
      <h3>添加新闻明细</h3>
      <div class='row'>
        <div class='col-md-2'><span>新闻标题</span></div>
        <div class='col-md-6'><span>{{newsTitle}}</span></div>
      </div>
      <div class='row'>
        <div class='col-md-2'><span>新闻模块</span></div>
        <div class='col-md-6'><span>{{newsOption}}</span></div>
      </div>
      <div class='row'>
        <div class='col-md-2'><span>新闻内容</span></div>
        <div class='col-md-6'><span>{{newsContent}}</span></div>
      </div>
      <button id='add-more-news-button' v-on:click="onAddMoreNews"  class='btn btn-default btn-sm'>继续添加新闻+</button>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    name: 'AddNews',
  //props:['moduleList'],
    data () {
      return {
        newsTitle:'',
        newsOption:'none',
        newsContent:'',
        hasSubmit:false,
        dummyNewsTitle:false,
        dummyNewsOption:false,
        dummyNewsContent:false
      }
    },
    computed:mapState({
      moduleList:state=>state.moduleList
    }),
    methods:{
      onSubmit:function (ev) {
        ev.preventDefault();
        if(this.newsTitle){
            this.dummyNewsTitle=false
        }else{
            this.dummyNewsTitle=true
        }
        if(this.newsOption=='none'){
            this.dummyNewsOption=true
        }else{
            this.dummyNewsOption=false
        }
        if(this.newsContent){
            this.dummyNewsContent=false
        }else{
            this.dummyNewsContent=true
        }

        if(!(this.dummyNewsTitle||this.dummyNewsOption||this.dummyNewsContent)){
          let newsInfo={
            newsId:Date.now(),
            title:this.newsTitle,
            module:this.newsOption,
            author:'hans',
            time:new Date(),
            visitTime:43,
            newsContent:this.newsContent
            };
          //this.$emit('addNews',newsInfo);
          this.addNews(newsInfo)
          this.hasSubmit=true
        }
      },
    onAddMoreNews(){
          this.newsTitle='';
          this.newsOption='none';
          this.newsContent='';
          this.hasSubmit=false;
    },
    ...mapMutations({
      addNews:'addNews'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .err-message{
    font-size:80%;
    color: red;
  }

  .requireDot{
    color: red;
    font-size: 70%;
    margin-left: 5px;

    vertical-align: top;
  }
  #add-news{
    margin-left: 10px;

  }

  #add-news input,textarea,select{
    width: 350px;
  }

  #add-news .col-md-2{
    padding-left: 2px;
  }

  #add-news h3{
    margin-left: 90px;
    margin-bottom: 30px;
  }

  #add-news-button{
    margin-left: 200px;
  }
  #add-news-prev .row{
    margin-top: 10px;
  }

  #add-news-prev .col-md-2{
    font-size: 110%;
    font-weight: 500;

  }

  #add-more-news-button{
    margin-left: 100px;
    margin-top: 30px;
  }

</style>
