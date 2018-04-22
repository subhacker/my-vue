import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

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



export default new Vuex.Store({
  state: {
    count:0,
    moduleList:moduleList,
    newsList:newsList,
    header:header
  },
  mutations: {
    increment (state) {
      state.count++
    },
    deleteModule(state,index){
      state.moduleList.splice(index,1)
    },
    reviseModule(state,data){
      let index=data.index;
      let moduleInfo=data.moduleInfo;
      console.log(index);
      console.log(moduleInfo)
      state.moduleList.splice(index,1,moduleInfo);
    },
    addModule(state,data){
      let moduleId=Date.now();
      let newModule=Object.assign({},data,{moduleId:moduleId})
      state.moduleList.push(newModule)
    },
    addNews(state,data){
      state.newsList.push(data)
    },
    deleteNews(state,data){
      let newsId=data;
      let index=state.newsList.findIndex(function (item,index,arr) {
        return item.newsId==newsId
      })

      console.log('删除的index')
      console.log(index)
      state.newsList.splice(index,1)

    },
    reviseNews(state,data){
      let index=data.reviseNewsIndex;
      let newsItem=data.newsItem;
      state.newsList.splice(index,1,newsItem)

    }

  }
})


