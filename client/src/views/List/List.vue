<template>
  <div class="page list">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li class="list-item" v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  import './list.less'

  export default {
    name: 'List',
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
  .list {
    &-item {
      height: 300px;
      width: 730px;
      margin: 10px auto;
      background: #0086b3;
      color: #fff;
      font-size: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
