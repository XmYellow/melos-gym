<template>
  <div class="my-input">
    <template v-if="type === 'user'">
      <input class="my-input__input" :type="type" v-model="value" :placeholder="placeholder">
      <img class="my-input__icon" src="./assert/user.png">
      <span v-show="showClear" class="my-input__close" @click="() => {value = ''}">X</span>
    </template>
    <template v-if="type === 'text'">
      <input class="my-input__input" :type="type" v-model="value" :placeholder="placeholder">
      <img class="my-input__icon" src="./assert/phone.jpg">
      <span v-show="showClear" class="my-input__close" @click="() => {value = ''}">X</span>
    </template>
    <template v-if="type === 'code'">
      <input class="my-input__input" :maxlength="4" :type="type" v-model="value" :placeholder="placeholder">
      <img class="my-input__icon" src="./assert/coe.png">
      <span v-show="showClear" class="my-input__btn" @click="sendMsg">{{timeTxt}}</span>
    </template>
    <div v-show="error" class="my-input__error">{{error}}</div>
  </div>
</template>

<script>
  const SEND_TXT = '发送验证码'
  const WAIT_TXT = '秒后，重新发送'
  export default {
    name: 'MyInput',
    data () {
      return {
        value: '',
        time: 0,
        timer: null
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      model: {
        type: [String, Number],
        default: ''
      },
      error: {
        type: String,
        default: '请输入正确的手机号码'
      },
      placeholder: {
        type: String,
        default: '请输入正确的手机号码'
      }
    },
    watch: {
      model (val) {
        this.value = val
      },
      value (val) {
        this.$emit('update:model', val)
        this.$emit('changeHandle', val)
      }
    },
    computed: {
      timeTxt () {
        const {time} = this
        if (time) return time + WAIT_TXT
        return SEND_TXT
      },
      showClear () {
        return !!this.value
      }
    },
    methods: {
      sendMsg () {
        if (this.time) return
        this.time = 60
        this.timer = setInterval(() => {
          this.time--
          if (this.time <= 0) clearTimeout(this.timer)
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
  .my-input {
    position: relative;
    height: 100px;
    width: 694px;
    margin: auto;
    padding-top: 30px;
    &__input {
      display: block;
      width: 100%;
      height: 70px;
      font-size: 32px;
      color: #fff;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 1px solid;
      border-color: #aaa;
      padding-left: 90px;
      padding-right: 20px;
      background: transparent !important;
      &:focus {
        border-color: #fff;
      }
    }
    &__icon {
      position: absolute;
      display: block;
      width: 27px;
      height: 30px;
      left: 32px;
      bottom: 24px;
    }
    &__close {
      position: absolute;
      display: block;
      width: 30px;
      height: 30px;
      right: 20px;
      bottom: 24px;
      font-size: 32px;
      color: #fff;
    }
    &__btn {
      position: absolute;
      display: inline-block;
      height: 50px;
      padding: 0 20px;
      line-height: 50px;
      right: 20px;
      bottom: 10px;
      font-size: 24px;
      background: #fff;
      text-align: center;
    }
    &__error {
      position: absolute;
      color: red;
      font-size: 22px;
    }
  }
</style>
