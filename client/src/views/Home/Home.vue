<template>
  <div class="home page">
    <Banner/>
    <div class="card">
      <div class="card-header">
        健身小知识<span>全部 >> </span>
      </div>
      <div class="card-body">
        <div class="scroll-y">
          <div class="scroll-y__body" style="width: 1000px;">
            <div class="item">1</div>
            <div class="item">1</div>
            <div class="item">1</div>
            <div class="item">1</div>
            <div class="item">1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        健身饮食<span>全部 >> </span>
      </div>
      <div class="card-body clearfix">
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
        <div class="article"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import './Home.less'
  import Banner from './compoments/Banner'

  export default {
    name: 'Home',
    components: {Banner}
  }
</script>
<style lang="less">
  .card {
    &-header {
      padding: 0 20px;
      height: 90px;
      line-height: 90px;
      span {
        float: right;
      }
    }
  }

  .scroll-y {
    height: 280px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    &__body {
      .item {
        display: inline-block;
        width: 320px;
        height: 250px;
        margin: auto 10px;
        background: #55a532;
      }
    }
  }
  .article{
    position: relative;
    float: left;
    display: inline-block;
    width: 50%;
    height: 300px;
    padding: 10px;
    &:after{
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      background: #666666;
    }
  }
</style>
