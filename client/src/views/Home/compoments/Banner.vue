<template>
  <div class="banner">
    <mt-swipe :auto="4000"  :show-indicators="true">
      <mt-swipe-item><div class="banner-item">1</div></mt-swipe-item>
      <mt-swipe-item><div class="banner-item">2</div></mt-swipe-item>
      <mt-swipe-item><div class="banner-item">3</div></mt-swipe-item>
    </mt-swipe>
  </div>

</template>
<style lang="less">
  .banner {
    position: relative;
    height: 400px;
    width: 100%;
    &-item{
      height: 400px;
      width: 100%;
      background: salmon;
      font-size: 100px;
    }
  }
</style>
