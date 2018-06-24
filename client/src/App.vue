<template>
  <div id="app">
    <main>
      <router-view v-transition></router-view>
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
    color: #2c3e50;
    font-size: 28px;
  }

  main {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
