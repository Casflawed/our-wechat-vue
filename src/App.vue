<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,body {
  /*height: 100%;*/
}
#app {
  height: 600px;
  width: 860px;
  margin: 20px auto;
  overflow: hidden;

}

</style>
