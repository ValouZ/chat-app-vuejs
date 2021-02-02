<template>
  <div class="photos">
    <!-- <img :key="img" v-for="img in imgs" :src=img alt="" /> -->
    <!-- Image ne se charge pas avec v-for -->
    <img src="../../src/assets/dog-image-1.jpg" alt="" />
    <img src="../../src/assets/dog-image-2.jpg" alt="" />
    <img src="../../src/assets/dog-image-3.jpg" alt="" />
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
.photos {
  align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: $margin-phone-content;
    margin-bottom: $margin-phone-content;
  }
}
</style>
