<template>
  <div class="register page">
    <img src="./assert/logo.png" class="register-logo">
    <div class="register-form">
      <MyInput type='user' :model.sync="model" placeholder="请输入用户名"/>
      <MyInput :model.sync="model"/>
      <MyInput type="code" :model.sync="model" placeholder="请输入验证码"/>
      <div class="register-btn"  @click="$router.push({path: '/login'})">立即注册</div>
      <div class="register-login"><span @click="$router.push({path: '/login'})">已有账号？请登陆</span></div>
    </div>
  </div>
</template>

<script>
  import MyInput from './../../components/MyInput'

  export default {
    name: 'Register',
    components: {MyInput},
    data () {
      return {
        model: ''
      }
    }
  }
</script>
<style lang="less">
  .register {
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
    &-login {
      color: #999;
      font-size: 32px;
      padding-top: 10px;
      padding-right: 30px;
      span {
        float: right;
      }
    }
  }
</style>
