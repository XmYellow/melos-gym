<template>
  <div class="page course">
    <div class="banner-top">
      <img src="./../../assets/banner1.jpeg">
    </div>
    <div class="course-time">
      <div class="course-time__prev">< 上周</div>
      <div class="course-time__next">下周 ></div>
    </div>
    <div class="course-day">
      <div class="course-day__tabs">
        <div class="course-day__tab" v-for="week in weekdays" :class="{active: week===active}"
             :key="week + 'tabs'" @click="changeWeek(week)">{{week}}
        </div>
      </div>
      <div class="course-day__content" v-for="week in weekdays" :key="week + 'content'"
           :class="{active: week===active}">
        <div class="course-day__article" v-for="i in 10" :key="week + 'content' +i ">
          {{week + ':'+ i}}
        </div>
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
      display: flex;
      padding: 20px 0;
      & > div {
        flex: 1;
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
      }
      &__tab {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        &.active {
          background: #eee;
        }
      }
      &__content {
        padding: 20px;
        display: none;
        &.active {
          display: block;
          transition: all 0.4s;
        }
      }
      &__article {
        height: 220px;
        background: #eee;
        border-radius: 5px;
        margin-bottom: 20px;
      }
    }
  }
</style>
