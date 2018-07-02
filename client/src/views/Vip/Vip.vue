<template>
  <div class="vip page">
    <div class="user-card">
      <img class="user-img" src="./assert/head.png">
      <div class="user-name">
        <div class="name">hello, 超人</div>
        <div class="vip-btn">
          普通会员
        </div>
      </div>
    </div>
    <div class="vip-radio">
      <span>选择门店：</span>
      <div class="vip-radio__box">
        <div class="my-radio">
          <div class="my-radio__item" :class="{active: select === 0}" @click="selectHandle(0)">厦门店</div>
          <div class="my-radio__item" :class="{active: select === 1}" @click="selectHandle(1)">漳州店</div>
        </div>
      </div>
    </div>
    <div class="vip-card">
      <div class="vip-card__body">
        <div class="vip-card__card">
          <div class="vip-card__info">
            <img src="./assert/logo.png">
            <div class="vip-card__txt">
              <span> MELOS时尚运动健身房</span>
              <em>尊贵会员</em>
            </div>
          </div>
          <div class="vip-card__price">
            888 元/月
          </div>
          <img src="./assert/check.png" class="vip-card__check">
        </div>
        <div class="vip-card__autoPay">
          <div class="my-radio__item" :class="{active: autoSelect}"
               @click="autoSelectHandle">一个月到期后自动续费，可随时取消
          </div>
        </div>
      </div>
    </div>
    <div class="vip-msg">
      <img src="./assert/laba.png">
      连续缴满5个月会员赠送一个月会员～
    </div>
    <div class="vip-pro">
      会员电子协议 <img src="./assert/ar.png">
    </div>
    <div class="vip-pay__btn">
      <div class="vip-pay__price">
        总价：<span>888元</span>
      </div>
      <div class="vip-pay__pay">立即结算</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Vip',
    data () {
      return {
        autoPay: true,
        radio: 'optionA',
        checked: [true, false],
        select: 0,
        autoSelect: true
      }
    },
    methods: {
      selectHandle (i) {
        this.select = i
      },
      autoSelectHandle () {
        this.autoSelect = !this.autoSelect
      }
    }
  }
</script>

<style lang="less">
  .vip {
    &-pay {
      display: flex;
      .mint-switch {
        display: inline-block;
        transform: scale(0.6);
      }

      &__txt {
        display: flex;
        align-items: center;
      }
      &__btn {
        position: fixed;
        bottom: 100px;
        height: 84px;
        width: 750px;
        left: 0;
        background: #fff;
        display: flex;
      }
      &__price {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 28px;
        font-size: 32px;
        font-weight: bolder;
        span {
          font-size: 42px;
          color: #E15204;
        }
      }
      &__pay {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 84px;
        background: #333;
        color: #fff;
        font-size: 32px;
        font-weight: bolder;
      }
    }
    &-radio {
      display: flex;
      align-items: center;
      background: #fff;
      height: 100px;
      padding: 0 28px;
      margin-bottom: 20px;
      &__box {
        flex: 1;
      }
    }
    &-card {
      &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 750px;
        overflow: hidden;
      }
      &__card {
        position: relative;
        width: 692px;
        height: 270px;
        padding: 28px 28px 0 28px;
        background: #fff;
        margin: auto;
      }
      &__autoPay {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 88px;
        padding-left: 100px;
      }
      &__info {
        display: flex;
        align-items: center;
        padding-bottom: 28px;
        border-bottom: 1px solid #F3F3F3;
        img {
          display: inline-block;
          width: 100px;
          height: 100px;
        }
      }
      &__check {
        position: absolute;
        display: inline-block;
        width: 84px;
        height: 84px;
        right: 0;
        bottom: 0;
      }
      &__price {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #E15204;
        height: 110px;
      }
      &__txt {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 28px;
        span {
          font-size: 32px;
          font-weight: bolder;
          color: #999;
        }
        em {
          color: #333;
          font-size: 32px;
          font-style: normal;
        }
      }
    }
    &-msg {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin-bottom: 10px;
      img {
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-right: 20px;
      }
    }
    &-pro {
      position: relative;
      height: 100px;
      display: flex;
      align-items: center;
      background: #fff;
      margin-bottom: 10px;
      padding-left: 28px;
      img {
        position: absolute;
        right: 28px;
        top: 0;
        bottom: 0;
        display: inline-block;
        width: 18px;
        height: 28px;
        margin: auto;
      }
    }
  }

  .my-radio {
    width: 100%;
    display: flex;
    &__item {
      position: relative;
      padding-left: 80px;
      flex: 1;
      &::before {
        position: absolute;
        display: block;
        content: '';
        left: 20px;
        bottom: 0;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        border: 1px solid #333;
      }
      &.active {
        &::after {
          position: absolute;
          display: block;
          content: '';
          left: 30px;
          bottom: 10px;
          border-radius: 50%;
          height: 20px;
          width: 20px;
          background: #333;
        }
      }
    }
  }
</style>
