<template>
  <div class="share page">
    <div class="share-card">
      <img src="./assert/head.png" class="share-card__user">
      <div class="share-card__photo">
        <img src="./assert/photo.png">
        <span>点击拍照</span>
      </div>
    </div>
    <div class="share-history">xxx已在MELOS运动馆坚持锻炼xx天xxx已在MELOS运动馆坚持锻炼xx天</div>
    <div class="share-line"></div>
    <div class="share-code">
      <div class="share-code__title">
        加入MELOS感受运动之迷人魅力 和MELOS一起超越自我
      </div>
      <div class="share-code__line"></div>
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
    background: url("./assert/1.jpg");
    background-size: cover;
    padding-top: 180px;
    &-card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 630px;
      height: 350px;
      background: url("./assert/card.png");
      background-size: cover;
      margin: auto;
      border-radius: 10px;
      &__user {
        position: absolute;
        display: inline-block;
        top: -90px;
        left: 225px;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 8px solid #fff;
      }
      &__photo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          display: inline-block;
          width: 80px;
          margin-bottom: 20px;
          margin-top: 30px;
        }
        span {
          font-size: 42px;
        }
      }
    }
    &-line {
      height: 2px;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;
      background: #fff;
    }
    &-history {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: bolder;
      padding: 30px 28px;
      width: 630px;
      margin: auto;
      background: #fff;
      border-top: 1px solid #9e9e9e;
      border-radius: 10px;
    }
    &-code {
      position: relative;
      width: 630px;
      height: 350px;
      margin: auto;
      border-radius: 10px;
      z-index: 8;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: '';
        background: url("./assert/card.png");
        background-size: cover;
        z-index: -1;
      }
      &__title {
        padding: 50px 40px 40px 40px;
        font-size: 32px;
        color: #150A07;
      }
      &__line {
        width: 572px;
        height: 2px;
        margin: auto;
        background: #D7D7D7;
      }
    }
  }

</style>
