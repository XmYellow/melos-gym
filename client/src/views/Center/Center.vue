<template>
  <div class="page center">
    <div class="user-card">
      <img class="user-img" src="./assert/head.png">
      <div class="user-name">
        <div class="name">hello, 超人 <img class="user-edit" src="./assert/edit.png"></div>
        <div class="vip-btn">
          普通会员
          <div class="user-phone"><img src="./assert/phone.png">18278231231<span>解绑</span></div>
        </div>
      </div>
    </div>
    <div class="center-vip" @click="goToVip">
      <img class="center-icon" src="./assert/huanguan.png">升级为VIP会员 <span class="arrow-icon"></span>
    </div>
    <div class="center-vip" @click="goToAutoPay">
      <img class="center-icon" src="./assert/laba.png">续费VIP会员 <span class="arrow-icon"></span>
    </div>
    <div class="center-sign">
      <div class="center-animate"></div>
      <div class="center-sign__btn" :class="{'active': isSign}" @click="signHandle">
        {{isSign?'已打卡':'打卡'}}
      </div>
      <span class="center-sign__txt">累计打卡2天</span>
    </div>
    <div class="center-history">
      <div class="center-history__header">
        健身体测记录
      </div>
      <div class="center-history__body">
        <div class="center-history__item" :class="{active: active === item}"
             v-for="item in 10" :key="item" @click="openAccrond(item)">
          <div class="center-history__title">
            <span class="cr"></span>
            体重
            <img src="./assert/ar.png" class="center-history__icon">
          </div>
          <div class="center-history__info">
            <span>初始体重</span> <span>最新体重</span> <span>目标体重</span>
          </div>
          <div class="center-history__info">
            <span>70kg</span> <span>80kg</span> <span>60kg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Center',
    data () {
      return {
        isPay: false,
        isSign: false,
        active: ''
      }
    },
    methods: {
      goToVip () {
        this.$router.push({path: '/vip'})
      },
      goToAutoPay () {
        this.$router.push({path: '/auto-pay'})
      },
      signHandle () {
        const {isSign} = this
        if (isSign) {
          return this.$router.push({path: 'share'})
        }
        this.$toast({
          message: '打卡成功',
          iconClass: 'icon icon-shouye9',
          duration: 1000
        })
        this.isSign = true
      },
      openAccrond (item) {
        const {active} = this
        if (item === active) return this.active = ''
        this.active = item
      }
    }
  }
</script>
<style lang="less">
  .center {
    &-vip {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 92px;
      font-size: 26px;
      background: #FFF;
      margin-bottom: 8px;
    }
    &-icon {
      display: inline-block;
      width: 52px;
      height: 46px;
      margin-right: 20px;
    }
    &-sign {
      position: relative;
      height: 350px;
      width: 100%;
      background: url("./assert/daka.jpg");
      background-size: cover;
      margin-bottom: 10px;
      &__btn {
        position: absolute;
        width: 188px;
        height: 188px;
        line-height: 188px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #F3F3F3;
        top: 50px;
        left: 50%;
        margin-left: -94px;
        z-index: 10;
        font-size: 42px;
        color: #fff;
        &::after {
          position: absolute;
          display: block;
          content: '';
          background: #F3F3F3;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          top: 0;
          left: 0;
          opacity: .4;
          z-index: -1;
        }
        &.active {
          background: #eee;
          color: #df5000;
        }
      }
      &__txt {
        display: block;
        width: 100%;
        padding-top: 30px;
        text-align: center;
        color: #fff;
        font-size: 32px;
        font-weight: bolder;
      }
    }
    &-animate {
      position: relative;
      top: 24px;
      left: 50%;
      margin-left: -120px;
      width: 240px;
      height: 240px;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: block;
        content: '';
        width: 188px;
        height: 188px;
        border-radius: 50%;
        border: 8px solid #F3F3F3;
        transform-origin: 94px 94px;
        animation: bowei infinite 2s;
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: block;
        content: '';
        width: 188px;
        height: 188px;
        border-radius: 50%;
        border: 8px solid #F3F3F3;
        transform-origin: 94px 94px;
        animation: bowei infinite 5s;
      }
    }
    &-history {
      background: #fff;
      &__header {
        height: 84px;
        line-height: 84px;
        padding-left: 28px;
        border-bottom: 1px solid #E9E9E9;
        background: #fff;
      }
      &__body {
        padding-left: 28px;
      }
      &__item {
        position: relative;
        width: 100%;
        height: 60px;
        line-height: 60px;
        overflow: hidden;
        transition: all .4s;
        &.active {
          height: 180px;
          transition: all .4s;
          .center-history__icon {
            transform: rotate(90deg);
            transition: all .4s;
          }
        }
      }
      &__title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #E9E9E9;
        .cr {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #999;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      &__icon {
        position: absolute;
        right: 28px;
        display: inline-block;
        width: 18px;
        height: 26px;
        transition: all .4s;
        transform: scale(0deg);
      }
      &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding-right: 40px;
        border-bottom: 1px solid #E9E9E9;
      }
    }
  }

  @keyframes bowei {
    0% {
      transform: scale(1);
      border-width: 1px;
    }
    70% {
      transform: scale(1.3);
      border-width: 2px;
      opacity: 1;
    }
    100% {
      transform: scale(1.3);
      border-width: 2px;
      opacity: 0;
    }
  }
</style>
