<template>
  <div v-on:click="onChange($event)"  id='manage-module'>
    <h3>管理界面</h3>
    <div   class='container'>
      <div id='header-title'  class='row'>
        <div class='col-md-2'>
          <span>名称</span>
        </div>
        <div class='col-md-2'>
          <span>序号</span>
        </div>
        <div class='col-md-4'>
          <span>操作</span>
        </div>
      </div>

      <div v-for="item in moduleList" v-bind:key="item.moduleId" class='row'>
        <div class='col-md-2'>
          <span v-if="selectedModuleIndex!=item.moduleIndex" >{{item.moduleName}}</span>
          <input v-if="selectedModuleIndex==item.moduleIndex" type="text"  v-model="moduleName"/>
        </div>
        <div class='col-md-2'>
          <span v-if="selectedModuleIndex!=item.moduleIndex" >{{item.moduleIndex}}</span>
          <input v-if="selectedModuleIndex==item.moduleIndex"  type="text" v-model="moduleIndex" />
        </div>
        <div  class='col-md-4'>
          <button v-if="selectedModuleIndex!=item.moduleIndex" v-bind:data-index="item.moduleIndex" class='btn btn-default btn-sm'>修改</button>
          <button v-if="selectedModuleIndex==item.moduleIndex"  v-bind:data-index="item.moduleIndex" class='btn btn-default btn-sm'>保存</button>
          <button v-bind:data-index="item.moduleIndex" class='btn btn-default btn-sm'>冻结</button>
          <button v-bind:data-index="item.moduleIndex" class='btn btn-default btn-sm'>删除</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    name: 'MangeModule',
    data () {
      return {
        selectedModuleIndex:'',
        moduleName:'',
        moduleIndex:''
      }
    },
    computed:mapState({
      moduleList:state=>state.moduleList
    }),
    methods:{
      onChange(ev){
        if(ev.target.innerHTML==='修改'){
          let moduleIndex=ev.target.index;
          this.selectedModuleIndex=ev.target.dataset.index;
          let selectedModule=this.moduleList.filter(function (item,index,arr) {
            return item.moduleIndex==this.selectedModuleIndex
          }.bind(this));
          this.moduleName=selectedModule[0].moduleName;
          this.moduleIndex=selectedModule[0].moduleIndex;
          return
        }

        if(ev.target.innerHTML==='保存'){
          let moduleIndex=ev.target.index;
          this.selectedModuleIndex=ev.target.dataset.index;
          let indexNo;
          let selectedModule=this.moduleList.filter(function (item,index,arr) {
            if( item.moduleIndex==this.selectedModuleIndex){
              indexNo=index;
              return true
            }else{
              return false
            }
          }.bind(this));
          let moduleInfo={
            moduleId:selectedModule[0].moduleId,
            moduleName:this.moduleName,
            moduleIndex:this.moduleIndex
          }
          let reviseModuleInfo={
            index:indexNo,
            moduleInfo:moduleInfo
            };
            //this.$emit('reviseModule',reviseModuleInfo)
          this.reviseModule(reviseModuleInfo)
          this.selectedModuleIndex='';
          this.moduleName='';
          this.moduleIndex='';
          return
          }

        if(ev.target.innerHTML==='删除'){
          let moduleIndex=ev.target.index;
          this.selectedModuleIndex=ev.target.dataset.index;
          let indexNo;
          let selectedModule=this.moduleList.filter(function (item,index,arr) {
            if( item.moduleIndex==this.selectedModuleIndex){
              indexNo=index;
              return true
            }else{
              return false
            }
          }.bind(this));
          //this.$emit('deleteModule',indexNo)
          this.deleteModule(indexNo)
          return
        }
      },
    ...mapMutations({
      reviseModule:'reviseModule',
      deleteModule:'deleteModule',

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #manage-module{
    margin-left: 125px;
  }

  #manage-module h3{
    margin-left: 120px;
  }

  #manage-module button{
    margin-left: 3px;
  }

  #manage-module.row{
    margin-top: 10px;
  }

  #manage-module #header-title {
    font-size: 110%;
    font-weight: 600;
  }

  #manage-module input{
    width: 100%;
  }

  [data-job='freeze']{
    background: #869972;
  }

  [data-job='delete']{
    background: #ffaa7d;
  }


  .err-message{
    font-size:80%;
    color: red;
  }

</style>
