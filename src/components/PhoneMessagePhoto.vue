<template>
  <div
    :class="
      `photos ${data.sender ? 'photos--sender' : 'photos--not-sender'} 
      ${data.class || ''}`
    "
  >
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
  display: flex;
  flex-wrap: wrap;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: $margin-phone-content;
    margin-bottom: $margin-phone-content;
  }

  &.photos--sender {
    align-self: flex-end;
    justify-content: flex-end;
  }
  &.photos--not-sender {
    align-self: flex-start;
    margin-left: $margin-phone-content;
  }
}

.first {
  margin-top: 16px;
}
</style>
