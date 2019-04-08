<template>
  <div class="content">
    <div class="tle">首页</div>
    <ul>
      <li @click="toDetail">1</li>
      <li>2</li>
      <li @click="delCount">-</li>
      <li @click="addCount">+</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
    </ul>
    <div>count: {{ countStr }};countCalc: {{ countCalc }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

class Functor {
  constructor (val) {
    this.val = val
  }

  map (f) {
    return new Functor(f(this.val))
  }
}

export default {
  name: 'Test',

  data () {
    return {
      localCount: 3
    }
  },

  created () {
    let aaa = new Functor(2).map(function (two) {
      return two + 2
    })

    console.log(this.addX(2)(1))
    console.log(aaa.val)
  },

  methods: {
    toDetail () {
      this.$router.push('/goodsDetail')
    },

    addCount () {
      this.$store.dispatch('increment')
    },

    delCount () {
      this.$store.dispatch('decrement', 2)
    },

    addX (y) {
      return x => x + y
    }
  },

  watch: {
  },

  computed: mapState({
    // count: state => state.count,
    countStr: 'count',
    countCalc (state) {
      return state.count + this.localCount
    }
  })
}
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: auto;
  .tle {
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-top: 20px;
    li {
      width: 25%;
      height: auto;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
