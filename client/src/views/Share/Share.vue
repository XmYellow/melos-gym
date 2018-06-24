<template>
  <div class="share page">
    <div class="share-user">
      <img src="./../../assets/article1.jpeg" alt="">
      <div class="share-user__name">sa 撒旦撒</div>
      <div class="share-user__day">已经坚持锻炼123天</div>
    </div>
    <div class="share-content">
      <div class="share-desc">
        这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
        这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
        这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
      </div>
      <qrcode class="share-qrcode" value="Hello, World!" :options="{ size: 100 }"></qrcode>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>
<style lang="less">
  .share {
    background: #fff;
    padding: 50px;
    &-user {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 0;
      background: #eee;
      img {
        display: block;
        width: 150px;
        height: 150px;
        border-radius: 150px;
      }
      &__name {
        margin-top: 20px;
      }
      &__day {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 32px;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 20px 0;
      background: #eee;
      border-top: 1px solid #969896;
    }
    &-qrcode {
      height: 220px;
      width: 220px;
      margin-bottom: 50px;
    }

  }

</style>
