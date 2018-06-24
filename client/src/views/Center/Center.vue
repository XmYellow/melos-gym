<template>
  <div class="page center">
    <div class="user-card">
      <img src="./../../assets/article1.jpeg">
      <div class="user-name">
        <div class="name">hello, 超人</div>
        <div class="vip-btn">超级vip</div>
      </div>
    </div>
    <div class="center-vip" @click="goToVip">
      成为vip或者续费vip >>
    </div>
    <div class="center-vip" @click="goToAutoPay">
      您是自动续费会员 >>
    </div>
    <div class="center-sign">
      <div class="center-sign__btn" :class="{'active': isSign}" @click="signHandle">
        {{isSign?'完成打卡':'打卡'}}
      </div>
      <span class="center-sign__txt">累计打卡2天</span>
    </div>
    <div class="center-history">
      <div class="center-history__header">
        健身记录
      </div>
      <div class="center-history__body">
        <div class="center-history__item" v-for="item in 10" :key="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import './Center.less'

  export default {
    name: 'Center',
    data () {
      return {
        isPay: false,
        isSign: false
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
      }
    }
  }
</script>
<style lang="less">
  .center {
    &-vip {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      font-size: 32px;
      color: #df5000;
      background: #aaa;
    }
    &-sign {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 400px;
      &__btn {
        width: 280px;
        height: 280px;
        line-height: 280px;
        text-align: center;
        border-radius: 280px;
        border: 1px solid #2c3e50;
        background: #df5000;
        &.active {
          background: #eee;
          color: #df5000;
        }
      }
      &__txt {
        padding-top: 20px;
      }
    }
    &-history {
      &__header {
        height: 80px;
        line-height: 80px;
        padding-left: 20px;
        border-top: 1px solid #2c3e50;
        border-bottom: 1px solid #2c3e50;
      }
      &__item {
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
        background: #969896;
      }
    }
  }
</style>
