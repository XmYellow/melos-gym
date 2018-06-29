<template>
  <div class="page teach">
    <img class="teach-banner" src="./asserts/banner.jpg">
    <div class="teach-body">
      <MyTitle title="金牌私教课程推荐"></MyTitle>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">
          <div class="teach-item">
            <img src="./asserts/art.jpg">
            <div class="teach-item__title">撕裂腹肌课程</div>
            <div class="teach-item__desc">撕裂腹肌课程</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Teach',
    data () {
      return {
        loading: false,
        list: 10
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list += 10
          }
          this.loading = false
        }, 2500)
      }
    }
  }
</script>
<style lang="less">
  .teach {
    &-item {
      height: 416px;
      width: 694px;
      color: #fff;
      font-size: 120px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .35);
      margin: 0 auto 20px auto;
      border-radius: 5px;
      img {
        display: block;
        width: 100%;
        height: 320px;
        margin: 0;
      }
      &__title {
        margin-top: 20px;
        font-size: 32px;
        font-weight: bolder;
        width: 100%;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px;
        white-space: nowrap;
      }
      &__desc {
        font-size: 24px;
        color: #999;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 20px;
      }
    }
    &-banner {
      display: block;
      width: 750px;
      height: 350px;
      margin-bottom: 20px;
    }
    &-body {
      background: #fff;
    }
  }
</style>
