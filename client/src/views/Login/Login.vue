<template>
  <div class="login page">
    <img src="./assert/logo.png" class="login-logo">
    <div class="login-form">
      <MyInput :model.sync="model"/>
      <MyInput type="code" :model.sync="model" placeholder="请输入验证码"/>
      <div class="login-btn"  @click="$router.push({path: '/center'})">登录</div>
      <div class="login-reg">
        <span @click="$router.push({path: '/register'})">注册</span>
        <span><img src="./assert/wechat.png" class="login-wehcat">微信登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './../../components/MyInput'

  export default {
    name: 'Login',
    components: {MyInput},
    data () {
      return {
        model: ''
      }
    }
  }
</script>
<style lang="less">
  .login {
    background-image: url("./assert/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    &-logo {
      position: absolute;
      display: block;
      width: 306px;
      height: 296px;
      top: 140px;
      left: 220px;
    }
    &-form {
      position: absolute;
      top: 500px;
      left: 0;
      right: 0;
      margin: auto;
    }
    &-btn {
      height: 100px;
      width: 694px;
      text-align: center;
      line-height: 100px;
      background: transparent;
      font-size: 32px;
      color: #999;
      margin: 96px auto 0 auto;
      border: 2px solid #999;
      border-radius: 10px;
    }
    &-reg {
      width: 694px;
      margin: auto;
      color: #999;
      & > span {
        display: inline-block;
        padding: 20px;
        font-size: 32px;
        overflow: auto;
        &:last-child {
          float: right;
        }
      }
    }
    &-wehcat {
      float: left;
      display: inline-block;
      width: 50px;
      height: 40px;
      margin-right: 20px;
    }
  }
</style>
