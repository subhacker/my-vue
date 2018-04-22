// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './vuex'

Vue.config.productionTip = false;
let moduleList=[
  {
    moduleIndex:1,
    moduleName:'react',
    moduleId:'15000001'

  },
  {
    moduleIndex:6,
    moduleName:'vue',
    moduleId:'15000344001'

  },
  {
    moduleIndex:5,
    moduleName:'angular',
    moduleId:'159993'

  },
  {
    moduleIndex:2,
    moduleName:'bootstrap',
    moduleId:'1500dsd0001'

  }
];

let newsList=[
  {
    newsId:123,
    title:'react入门',
    module:'react',
    author:'hans',
    time:'2018-2-23 12:43:45',
    visitTime:43,
    newsContent:'React Redux Router'
  }
];
let header=[
  {
    name:'序号',
    classPros:'index'
  },
  {
    name:'标题',
    classPros:'title'
  },
  {
    name:'模块',
    classPros:'module'
  },
  {
    name:'作者',
    classPros:'author'

  },
  {
    name:'创建时间',
    classPros:'time'
  },
  {
    name:'浏览次数',
    classPros:'times'
  },
  {
    name:'操作',
    classPros:'operate'
  }
];


new Vue({
  el: '#app',
  store:store,
  methods:{
    onAddModule(data){
      let moduleId=Date.now();
      let newModule=Object.assign({},data,{moduleId:moduleId})
      this.moduleList.push(newModule)
    },
    onReviseModule(data){
      let index=data.index;
      let moduleInfo=data.moduleInfo;
      console.log(index);
      console.log(moduleInfo)
      this.moduleList.splice(index,1,moduleInfo);
    },
    onDeleteModule(data){
      let index=data;
      this.moduleList.splice(index,1)
    },
    onAddNews(data){
      this.newsList.push(data);
    },
    onDeleteNews(data){
      let newsId=data;
      let index=this.newsList.findIndex(function (item,index,arr) {
        return item.newsId==newsId
      })

      console.log('删除的index')
      console.log(index)
      this.newsList.splice(index,1)
    },
    onReviseNews(data){
      let index=data.reviseNewsIndex;
      let newsItem=data.newsItem;
      this.newsList.splice(index,1,newsItem)
    }

  },
  data:{
    moduleList:moduleList,
    newsList:newsList,
    header:header
  },
  router,
  components: { App },
  template: '<App ' +
  //'v-bind:moduleList="moduleList"' +
 // ' v-bind:newsList="newsList"' +
 // ' v-bind:header="header"' +
 // ' v-on:addModule="onAddModule" ' +
 // 'v-on:reviseModule="onReviseModule"' +
 // ' v-on:deleteModule="onDeleteModule"' +
 // ' v-on:addNews="onAddNews" ' +
 // 'v-on:deleteNews="onDeleteNews" ' +
 // 'v-on:reviseNews="onReviseNews"
   '/>'
})
