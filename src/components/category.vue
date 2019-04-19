<template>
  <div class="container">
    <div class="content">分类</div>
    <slotDemo>
      <div slot="test">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
    </slotDemo>
  </div>
</template>

<script>
import slotDemo from './slotDemo.vue'

export default {
  components: {
    slotDemo
  }
}
</script>

<style lang="less" scoped>

</style>
