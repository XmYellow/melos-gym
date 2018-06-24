<template>
  <div class="page auto-pay">
    <div class="auto-pay__user">
      <img src="./../../assets/article1.jpeg" alt="">
      <div class="auto-pay__name">you name</div>
      <div class="auto-pay__time">起止时间：2018-02-12至2018-05-22</div>
    </div>
    <div @click="change" class="auto-pay__btn">关闭自动续费</div>
    <div @click="showCartHandle" class="auto-pay__btn">立即续费</div>
    <template v-if="showCart">
      <SelectCard @selectHandle="selectHandle"/>
      <div class="auto-pay__switch">
        <mt-switch v-model="autoPay"></mt-switch>
        <div class="auto-pay__txt">
          到期后自动续费
        </div>
      </div>
      <div class="pay-cart">
        <div class="pay-cart__price">
          总价：213.21元
        </div>
        <div class="pay-cart__btn">
          确认
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import SelectCard from './../../components/SelectCard'

  export default {
    name: 'AutoPay',
    components: {SelectCard},
    data () {
      return {
        autoPay: false,
        showCart: false
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
    padding: 20px;
    &__user {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 400px;
      background: #eee;
      img {
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        border: 1px solid #0086b3;
      }
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
      height: 80px;
      line-height: 80px;
      text-align: center;
      background: #eee;
      font-size: 32px;
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
