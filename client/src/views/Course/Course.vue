<template>
  <div class="page course">
    <div class="banner-top">
      <img src="./../../assets/banner1.jpeg">
    </div>
    <div class="course-time">
      <div class="course-time__prev">上一周</div>
      <div class="course-time__next">下一周</div>
    </div>
    <div class="course-day">
      <div class="course-day__tabs">
        <div class="course-day__tab" v-for="week in weekdays" :class="{active: week===active}"
             :key="week + 'tabs'" @click="changeWeek(week)">{{week}}
        </div>
      </div>
      <div class="course-day__content" v-for="week in weekdays" :key="week + 'content'"
           :class="{active: week===active}">
        <MyTitle title="课程推荐"></MyTitle>
        <div class="course-day__article" v-for="i in 5" :key="week + 'content' +i ">
          <img class="course-day__img" src="./asserts/course.jpg">
          <div class="course-day__info">
            <div class="course-day__title">力与美的平衡力与美的平衡</div>
            <div class="course-day__desc">这是一个小说明这是一个小说这是一个小说明这是一个小说明明</div>
          </div>
        </div>
        <NotData />
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Course',
    data () {
      return {
        active: '周一',
        weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    },
    methods: {
      changeWeek (week) {
        this.active = week
      }
    },
  }
</script>
<style lang="less">
  .banner-top {
    img {
      display: inline-block;
      width: 100%;
    }
  }

  .course {
    &-time {
      padding: 0 28px;
      display: flex;
      height: 75px;
      align-items: center;
      & > div {
        flex: 1;
        font-size: 28px;
        color: #333;
      }
      &__prev {
        text-align: left;
      }
      &__next {
        text-align: right;
      }
    }
    &-day {
      &__tabs {
        display: flex;
        padding: 0 28px;
        height: 75px;
      }
      &__tab {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        width: 95px;
        height: 44px;
        border-radius: 20px;
        &.active {
          background: #333;
          color: #fff;
        }
      }
      &__content {
        padding: 0 20px 20px 20px;
        background: #fff;
        display: none;
        &.active {
          display: block;
          transition: all 0.4s;
        }
      }
      &__article {
        position: relative;
        width: 692px;
        height: 320px;
        border-radius: 5px;
        margin: 0 auto 20px auto;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .35);
      }
      &__img {
        display: block;
        width: 100%;
      }
      &__info {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 380px;
        height: 96px;
        z-index: 10;
        color: #fff;
        &::after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          z-index: -1;
          background: #333;
          opacity: .8;
        }
      }
      .course-day__title {
        margin-top: 20px;
        width: 200px;
        font-size: 32px;
        font-weight: bolder;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .course-day__desc {
        font-size: 24px;
        text-align: center;
        padding: 0 20px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
