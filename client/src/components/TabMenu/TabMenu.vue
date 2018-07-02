<template>
  <div class="tab-menu">
    <div class="tab-menu__items">
      <div class="tab-menu__item">
        <router-link to="/home">
          <span class="tab-menu__icon home"></span>
          首页
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/course">
          <span class="tab-menu__icon course"></span>
          课程
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/teach">
          <span class="tab-menu__icon teach"></span>
          私教
        </router-link>
      </div>
      <div class="tab-menu__item">
        <router-link to="/login">
          <span class="tab-menu__icon center"></span>
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
    &__icon {
      width: 36px;
      height: 36px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &.home {
        width: 36px;
        height: 34px;
        background-image: url("./assert/home1.png");
      }
      &.course {
        background-image: url("./assert/course1.png");
      }
      &.teach {
        height: 40px;
        background-image: url("./assert/teach1.png");
      }
      &.center {
        background-image: url("./assert/center1.png");
      }
    }
    .router-link-active {
      .tab-menu__icon {
        &.home {
          background-image: url("./assert/home.png");
        }
        &.course {
          background-image: url("./assert/course.png");
        }
        &.teach {
          height: 40px;
          background-image: url("./assert/teach.png");
        }
        &.center {
          background-image: url("./assert/center.png");
        }
      }
    }
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
      }
    }
  }

</style>
