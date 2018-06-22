<template>
  <div class="tab-menu">
    <div class="tab-menu__items">
      <div class="tab-menu__item">
        <router-link to="/">
          <i class="icon icon-shouye"></i>
          首页
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/course">
          <i class="icon icon-shouye6"></i>
          课程
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/teach">
          <i class="icon icon-shouye3"></i>
          私教
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/center">
          <i class="icon icon-shouye2"></i>
          我的
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabMenu'
  }
</script>

<style lang="less">

  .tab-menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #e5e5e5;
    font-size: 20px;
    z-index: 999;
    &__items {
      width: 750px;
      display: flex;
      margin: auto;
    }
    &__item {
      display: flex;
      flex: 1;
      height: 100px;
      font-size: 22px;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .icon {
          font-size: 32px;
        }
      }
    }
  }

</style>
