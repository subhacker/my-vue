<template>

  <div id="add-module" class="container">
    <div v-if="!hasSubmit">
      <h3>添加模块</h3>
      <form class="form-horizontal" v-on:submit="onSubmit($event)">
        <div class="form-group">
          <label for="moduleName" class="col-sm-3 control-label">模块名称</label>
          <div class="col-sm-5">
            <input  type="text"  class="form-control" id="moduleName"  v-model="moduleName" >
          </div>
          <span class="err-tip" v-if="dummyModuleName">请指定模块名称</span>
          <span class="err-tip" v-if="hasRepeatModuleName" >模块名称不能重复</span>
        </div>
        <div class="form-group">
          <label for="moduleIndex" class="col-sm-3 control-label">模块序号</label>
          <div class="col-sm-5">
            <input type="number"  class="form-control" id="moduleIndex" v-model="moduleIndex"    >
          </div>
          <span class="err-tip" v-if="dummyModuleIndex" >请指定模块序号</span>
          <span class="err-tip" v-if="hasRepeatModuleIndex">模块序号不能重复</span>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-10">
            <button type="submit" class="btn btn-default">添加模块</button>
          </div>
        </div>
      </form>
    </div>

    <div  v-if="hasSubmit">
      <h3>已添加模块</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-2">模块名称</div>
          <div class="col-md-3">{{moduleName}}</div>
        </div>
        <div class="row">
          <div class="col-md-2">模块序号</div>
          <div class="col-md-3">{{moduleIndex}}</div>
        </div>
      </div>
      <button id="add-more"  v-on:click="addMore" class="btn btn-primary btn-sms">继续添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModule',
  props:['moduleList'],
  data () {
    return {
        hasSubmit:false,
        moduleName:'',
        moduleIndex:'',
        dummyModuleName:false,
        dummyModuleIndex:false,
        hasRepeatModuleName:false,
        hasRepeatModuleIndex:false,
    }
  },
  methods:{

      onSubmit:function (ev) {
          ev.preventDefault();
          if(this.moduleName){
              this.dummyModuleName=false;
              let hasRepeatName=this.moduleList.some(function (item,index,arr) {
                  if(item.moduleName===this.moduleName){
                      return true
                  }else{
                      return false
                  }
              }.bind(this));
            if(hasRepeatName){
              this.hasRepeatModuleName=true
            }else{
              this.hasRepeatModuleName=false
            }
          }else{
              this.dummyModuleName=true;
          }

          if(this.moduleIndex){
              this.dummyModuleIndex=false;
            let hasRepeatIndex=this.moduleList.some(function (item,index,arr) {
              if(item.moduleIndex===this.moduleIndex){
                return true
              }else{
                return false
              }
            }.bind(this));

            if(hasRepeatIndex){
              this.hasRepeatModuleIndex=true
            }else{
              this.hasRepeatModuleIndex=false
            }
          }else{
              this.dummyModuleIndex=true
          }

          if(!(this.dummyModuleName||this.dummyModuleIndex||this.hasRepeatModuleName||this.hasRepeatModuleIndex)){
              console.log('满足Module条件，准备提交到Vue实例上');
            let newModule={
              moduleName:this.moduleName,
              moduleIndex:this.moduleIndex
            };
              this.$emit('addModule',
                {
                  moduleName:this.moduleName,
                   moduleIndex:this.moduleIndex
                });
            this.hasSubmit=true;
          }

      },
    addMore(){
          this.hasSubmit=false;
          this.moduleName='';
          this.moduleIndex='';
    }
  }
}
</script>


<style scoped>

  #add-module{
    width: 100%;
  }

  .err-tip{
    color: red;
    font-size: 80%;
    position: relative;
    top: 20px;
  }

  #add-module h3{
    margin-left: 180px;
    margin-top: 25px;
    margin-bottom: 20px;
  }

  #add-more{
    margin-left: 150px;
    margin-top: 30px;
  }

</style>
