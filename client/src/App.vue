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
  @import "~vueg/css/transition-min.css";

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
    padding-bottom: 100px;
  }

  .page {
    position: relative;
    background: #fff;
    min-height: 100vh;
    width: 750px;
    margin: auto;
    overflow: auto;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
</style>
