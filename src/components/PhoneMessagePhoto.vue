<template>
  <div class="photos">
    <img :key=img v-for="img in imgs" :src="img" alt="">
    <img src="../../src/assets/dog-image-1.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "PhoneMessagePhoto",
  props: {
    imgs: Array,
  },
};
</script>

<style lang="scss" scoped>
  .photos{
    img{
      width: 40px;
      height: 40px;
    }
  }
</style>
