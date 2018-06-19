<template>
  <div id="app">
    <div class="header">
      <router-link to="/home">home</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/share">share</router-link>
    </div>
    <main>
      <router-view v-transition></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import "~vueg/css/transition-min.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  main{
    width: 100%;
    overflow: hidden;
  }
  .header{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: salmon;
    font-size: 20px;
  }

</style>
