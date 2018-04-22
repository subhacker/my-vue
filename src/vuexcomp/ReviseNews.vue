<template>
  <div>
    <div id="revise-news">
      <h3>修改新闻</h3>
      <form id='form' class='form-horizontal' v-on:submit="onSubmit($event)">
        <div class="form-group">
          <label class='col-md-2' for="newsTitle">新闻标题<span class='requireDot'>*</span></label>
          <input  type='text' class="form-control input-sm col-md-5" id="newsTitle" v-model="newsTitle"  />
          <span  v-if="dummyNewsTitle"  class='err-message col-md-2'>标题不得为空</span>
        </div>
        <div class="form-group">
          <label class='col-md-2' for="newsOption">模块序号<span class='requireDot'>*</span></label>
          <select id='newsOption'   class='form-control input-sm col-md-5'  v-model="newsOption">
            <option value='none' >请选择</option>
            <option v-for="item in moduleList" v-bind:key="item.moduleIndex" v-bind:value="item.moduleName">{{item.moduleName}}</option>
          </select>
          <span v-if="dummyNewsOption"  class='err-message col-md-2'>请指定模块</span>

        </div>
        <div class="form-group">
          <label class='col-md-2' for="newsContent">新闻内容<span class='requireDot'>*</span></label>
          <textarea rows='12'   class="form-control col-md-5 " id="newsContent" v-model="newsContent" ></textarea>
          <span v-if="dummyNewsContent"  class='err-message col-md-2'>内容不能为空</span>
        </div>
        <button    type="submit" class="btn btn-default btn-sm">添加</button>
      </form>
    </div>

  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    name: 'ReviseNews',
 // props: ['header', 'moduleList', 'newsList'],
    computed:mapState({
    header:state=>state.header,
    moduleList:state=>state.moduleList,
    newsList:state=>state.newsList
    }),
    data () {
      return {
        newsTitle: '',
        newsOption: 'none',
        newsContent: '',
        hasSubmit: false,
        dummyNewsTitle: false,
        dummyNewsOption: false,
        dummyNewsContent: false,
        reviseNewsIndex:''
      }
    },
    mounted:function () {
      let newsId=this.$route.query.newsId;
      let reviseNews=this.newsList.filter(function (item,index,arr) {
        if(item.newsId==newsId){
            this.reviseNewsIndex=index
            return true
        }else{
            return false
        }

      }.bind(this));
      this.newsTitle=reviseNews[0].title;
      this.newsOption=reviseNews[0].module;
      this.newsContent=reviseNews[0].newsContent;
    },
    methods: {
      onSubmit: function (ev) {
       ev.preventDefault();

        if (this.newsTitle) {
          this.dummyNewsTitle = false
        } else {
          this.dummyNewsTitle = true
        }
        if (this.newsOption == 'none') {
          this.dummyNewsOption = true
        } else {
          this.dummyNewsOption = false
        }
        if (this.newsContent) {
          this.dummyNewsContent = false
        } else {
          this.dummyNewsContent = true
        }


        if (!(this.dummyNewsTitle || this.dummyNewsOption || this.dummyNewsContent)) {
          let newsItem = {
            newsId: Date.now(),
            title: this.newsTitle,
            module: this.newsOption,
            author: 'hans',
            time: new Date(),
            visitTime: 43,
            newsContent: this.newsContent
          };
          let newsInfo={
            newsItem:newsItem,
            reviseNewsIndex:this.reviseNewsIndex
        }
        //this.$emit('reviseNews', newsInfo);
        this.reviseNews(newsInfo)
        this.$router.push({path:'manage-news'})
      }
    },
    ...mapMutations({
      reviseNews:'reviseNews'
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


  #revise-news input,textarea,select{
    width: 350px;
  }

</style>
