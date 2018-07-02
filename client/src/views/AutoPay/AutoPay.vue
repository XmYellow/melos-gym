<template>
  <div class="page auto-pay">
    <div class="auto-pay__bg">
      <div class="auto-pay__user">
        <span class="auto-pay__address">厦门店</span>
        <img src="./../../assets/article1.jpeg" alt="">
        <div class="auto-pay__name">you name</div>
        <div class="auto-pay__time">起止时间：2018-02-12至2018-05-22</div>
      </div>
      <div @click="change" class="auto-pay__btn">自动续费</div>
      <div @click="showCartHandle" class="auto-pay__btn default">关闭立即续费</div>
    </div>
    <div class="auto-pay__msg">
      <img src="./assert/laba.png">
      连续缴满5个月会员赠送一个月会员～
    </div>
    <div class="auto-pay__pro">
      会员电子协议「已签订」
      <img src="./assert/ar.png">
    </div>
  </div>
</template>

<script>
  import SelectCard from './../../components/SelectCard'

  export default {
    name: 'AutoPay',
    components: {SelectCard},
    data () {
      return {
        autoPay: false
      }
    },
    methods: {
      change () {
        this.$toast({
          message: '修改成功',
          iconClass: 'icon icon-shouye9'
        })
      },
      selectHandle (select) {
        console.log(select)
      },
      showCartHandle () {
        this.showCart = true
      }
    }
  }
</script>

<style lang="less">
  .auto-pay {
    position: relative;
    &__bg {
      background-image: url("./assert/banner.png");
      background-repeat: no-repeat;
      background-color: #fff;
      background-size: 100% auto;
      padding-bottom: 30px;
      border-bottom: 10px solid #F3F3F3 ;
    }
    &__user {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 374px;
      width: 650px;
      margin: 54px auto 0 auto;
      background: url("./assert/card.png") no-repeat;
      background-size: cover;
      img {
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        border: 1px solid #0086b3;
      }
    }
    &__msg{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background: #fff;
      margin-bottom: 20px;
      img{
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-right: 28px;
      }
    }
    &__pro{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      background: #fff;
      img{
        display: inline-block;
        width: 18px;
        height: 24px;
        margin-right: 28px;
      }
    }
    &__address {
      position: absolute;
      left: 34px;
      top: 42px;
      font-size: 24px;
      color: #FFCE79;
    }
    &__name {
      font-size: 26px;
      padding: 20px;
      text-align: center;
    }
    &__time {
      font-size: 26px;
      padding: 20px;
      text-align: center;
    }
    &__btn {
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      height: 72px;
      width: 638px;
      line-height: 72px;
      text-align: center;
      background: #eee;
      font-size: 32px;
      border-radius: 36px;
      background: linear-gradient(90deg, #FCD366, #F2B344);
      &.default {
        background: #fff;
        border: 1px solid #999;
        color: #999;
      }
    }
    &__switch {
      display: flex;
      .mint-switch {
        display: inline-block;
        transform: scale(0.6);
      }
    }
    &__txt {
      display: flex;
      align-items: center;
    }
  }

  .pay-cart {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 750px;
    margin: auto;
    background: #eee;
    height: 100px;
    z-index: 1000;
    font-size: 32px;
    display: flex;
    & > div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    &__price {
      flex: 1;
    }
    &__btn {
      flex: 1;
      background: #df5000;
    }
  }
</style>
