<template>
  <div :class="'photos ' + data.class">
    <img
      :key="img"
      v-for="img in data.imgs"
      :src="require('../../src/assets/' + img)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "PhoneMessagePhoto",
  props: ["data"],
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
