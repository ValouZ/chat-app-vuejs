<template>
  <div :class="'photos ' + firstClass[0]">
    <div>{{}}</div>
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
    class: String,
  },
  computed: {
    // returns a list of 1 string referencing the class props
    firstClass() {
      let result = [];
      // Look for all the component props and get an array of all its
      // enumerable [key, value] pairs
      for (let [propKey, propValue] of Object.entries(this.$props)) {
        if (`${propKey}` == "class") {
          // Add the prop to the class as '<key><value>'
          // ie. xs prop with a value of 3 results in 'xs3'
          result.push(`${propValue}`);
        }
      }
      return result;
    },
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

.first {
  margin-top: 16px;
}
</style>
