<template>
  <div class="home page">
    <img class="home-banner" src="./asserts/banner.jpg">
    <div class="card">
      <MyTitle title="健身饮食专区"></MyTitle>
      <div class="card-body">
        <div class="scroll-y">
          <div class="scroll-y__body">
            <div class="item zhishi" v-for="i in 10" :key="'art'+i">
              <img src="./asserts/art.jpg">
              <div class="title">力与美的平衡</div>
              <div class="desc">这是一个小说明这是一个小说明这是一个小说明这是一个小说明</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <MyTitle title="健身饮食专区"></MyTitle>
      <div class="card-body">
        <div class="scroll-y">
          <div class="scroll-y__body">
            <div class="item yinshi" v-for="i in 10" :key="'art'+i">
              <img src="./asserts/yinshi.jpg">
              <div class="title">力与美的平衡力与美的平衡</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './Home.less'
  import Banner from './compoments/Banner'

  export default {
    name: 'Home',
    components: {Banner},
    methods: {
      goToList () {
        this.$router.push({path: '/teach'})
      }
    },
  }
</script>
<style lang="less">
  .card {
    background: #fff;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .scroll-y {
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    &__body {
      display: flex;
      .item {
        display: flex;
        flex-direction: column;
        flex: 1;
        &.zhishi {
          width: 500px;
          height: 440px;
          margin: auto 28px;
          img {
            width: 500px;
            height: 300px;
          }
        }
        &.yinshi {
          width: 266px;
          height: 380px;
          margin: auto 10px;
          &:first-child {
            margin-left: 28px;
          }
          img {
            width: 266px;
            height: 270px;
          }
        }
      }
      img {
        display: block;
        box-shadow: 0 3px 10px rgba(0, 2px, 0, 0.35);
        margin-bottom: 10px;
      }
      .title {
        font-size: 32px;
        font-weight: bolder;
        color: #333;
        text-align: left;
        padding-left: 10px;
        margin-bottom: 10px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        color: #999;
        font-size: 24px;
        padding-left: 10px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .home {
    &-banner {
      display: block;
      width: 750px;
      height: 350px;
      margin-bottom: 10px;
    }
  }

  .article {
    position: relative;
    float: left;
    display: inline-block;
    width: 50%;
    height: 300px;
    padding: 10px;
    &:after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      background: #666666;
    }
  }
</style>
