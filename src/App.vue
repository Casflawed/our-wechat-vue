<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  mounted(){
    console.log('app组件：',this)
  }
};
</script>

<style>
/* 初始化start */
* {
  margin: 0px; /* 内间距 */
  padding: 0px; /* 外间距 */
}

#app {
  height: 600px;
  width: 860px;
  margin: 20px auto;
  overflow: hidden;

}

</style>
