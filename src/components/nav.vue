<template>
  <div class="content">
    <div class="container">
      <router-view/>
    </div>
    <ul>
      <li>
        <router-link to="/index">付款</router-link>
      </li>
      <li>
        <router-link to="/category">会员</router-link>
      </li>
      <li>
        <router-link to="/shopCart">外卖</router-link>
      </li>
      <li>
        <router-link to="/user">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  }
}
</script>

<style lang="less" scoped>
.content {
  .container {
    width: 100%;
    height: auto;
    max-height: calc(100vh - 40px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  ul {
    display: flex;
    width: 100%;
    height: auto;
    border-top: 1px solid #f0f0f0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99;
    li {
      width: 25%;
      height: auto;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
