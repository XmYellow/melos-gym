<template>
  <div class="page not-found">
    <div><i class="icon icon-shouye3"></i></div>
    <div class="not-found__title">404</div>
    <div>对不起，页面找不到了</div>
    <div class="back" @click="$router.push({path: '/'})"><i class="icon icon-shouye"></i>返回首页</div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang="less">
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    &__title {
      margin-top: 30px;
      font-size: 50px;
      margin-bottom: 30px;
    }
    .icon-shouye3 {
      font-size: 120px;
      margin-bottom: 50px;
    }
    .back{
      margin-top: 220px;
      .icon-shouye{
        font-size: 40px;
        margin-right: 10px;
      }
    }
  }
</style>
