<template>
  <div class="my-title">
    {{title}}<img class="arrow" @click="$emit('clickHandle')" src="./ar.png">
  </div>
</template>

<script>
  export default {
    name: 'MyTitle',
    props: {
      title: [String]
    }
  }
</script>

<style lang="less">
  .my-title {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 100px;
    font-size: 32px;
    font-weight: bolder;
    color: #333333;
    &::after {
      position: absolute;
      display: block;
      content: "";
      left: 28px;
      top: 38px;
      width: 8px;
      height: 30px;
      background: #333;
    }
    & .arrow {
      position: absolute;
      right: 50px;
      top: 34px;
      display: block;
      width: 18px;
    }
  }
</style>
