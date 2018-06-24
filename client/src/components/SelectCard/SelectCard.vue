<template>
  <div class="select-card">
    <div class="select-card__title">会员套餐</div>
    <div class="select-card__body">
      <div @click="selectHandle(1)" class="select-card__item " :class="{active: select===1}"></div>
      <div @click="selectHandle(2)" class="select-card__item " :class="{active: select===2}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectCard',
    data () {
      return {
        select: 1
      }
    },
    methods: {
      selectHandle (select) {
        this.select = select
        this.$emit('selectHandle', select)
      }
    },
  }
</script>

<style lang=less>
  .select-card {
    padding: 20px;
    &__title {
      margin-bottom: 10px;
    }

    &__body {
      display: flex;
    }
    &__item {
      flex: 1;
      height: 250px;
      background: #eee;
      border: 1px solid #eee;
      &.active {
        border-color: #0086b3;
      }
      &:first-child {
        margin-right: 20px;
      }
    }
  }
</style>
