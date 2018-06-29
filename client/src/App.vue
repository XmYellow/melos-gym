<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <TabMenu/>
  </div>
</template>

<script>
  import TabMenu from './components/TabMenu'

  export default {
    name: 'app',
    components: {TabMenu}
  }
</script>

<style lang="less">
  @import "./style/index";
  @import "~vueg/css/transition-min.css";
  @import "./style/common";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    font-size: 28px;
    background: #d8d8d9;
  }

  main {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
