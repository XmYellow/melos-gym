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
      选择门店：
      <div class="vip-radio__box">
      </div>
    </div>
    <SelectCard @selectHandle="selectHandle"/>
    <div class="vip-pay">
      <mt-switch v-model="autoPay"></mt-switch>
      <div class="vip-pay__txt">
        到期后自动续费
      </div>
    </div>
    <div class="vip-pay__btn">
      <mt-button size="large" type="primary">立即支付</mt-button>
      <div class="vip-pay__link">会员电子协议 >></div>
    </div>
  </div>
</template>

<script>
  import SelectCard from './../../components/SelectCard'

  export default {
    name: 'Vip',
    components: {SelectCard},
    data () {
      return {
        autoPay: true,
        select: 1,
        radio: 'optionA',
        checked: [true, false]
      }
    },
    methods: {
      selectHandle (select) {
        console.log(select)
      },
      radioHandle (i) {
        this.checked = [false, false]
        this.checked[i] = true
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
        margin-top: 50px;
        padding: 0 20px;
      }
      &__link {
        font-size: 26px;
        color: #0086b3;
        padding: 20px 0;
      }
    }
    &-radio {
      display: flex;
      background: #fff;
      height: 100px;
      align-items: center;
      padding: 0 28px;
    }
  }
</style>
