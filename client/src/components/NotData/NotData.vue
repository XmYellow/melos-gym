<template>
  <div not-data>
    <i class="icon icon-shouye2"></i>
    对不起没有相关数据
  </div>
</template>

<script>
  export default {
    name: 'NotData'
  }
</script>

<style lang="less">
  [not-data] {
    display: flex;
    min-height: 40vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    .icon-shouye2 {
      font-size: 60px;
      margin-bottom: 20px;
    }
  }
</style>
