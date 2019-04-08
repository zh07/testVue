<template>
  <div class="content">
    <swiper :options="swiperOption">
      <swiper-slide><img src="@/assets/logo.png" @click="toTest"></swiper-slide>
      <swiper-slide><img src="@/assets/logo.png"></swiper-slide>
      <swiper-slide><img src="@/assets/logo.png"></swiper-slide>
      <swiper-slide><img src="@/assets/logo.png"></swiper-slide>
      <swiper-slide><img src="@/assets/logo.png"></swiper-slide>
      <swiper-slide><img src="@/assets/logo.png"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Index',

  components: {
    swiper,
    swiperSlide
  },

  data () {
    return {
      swiperOption: {
      }
    }
  },

  methods: {
    toTest () {
      console.log(33)
      this.$router.push('/test')
    }
  },

  watch: {
  },

  computed: {
  }
}
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: auto;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
