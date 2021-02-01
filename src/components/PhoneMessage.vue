<template>
  <div v-if="sender == false" class="message message--not-sender">
    {{ msg }}
  </div>
  <div v-else class="message message--sender">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "PhoneMessage",
  props: {
    msg: {
      type: String,
      required: true,
    },
    sender : Boolean
  },
};
</script>

<style lang="scss" scoped>
.message {
  width: fit-content;
  max-width: 128px;
  padding: 6px 8px;
  margin-bottom: 8px;
  font-size: 8px;

  &.message--not-sender {
    border-radius: 10px 10px 10px 4px;
    background: $message-background;
    color: $chat-on-the-left;
    margin-left: 8px;
  }
  &.message--sender {
    align-self: flex-end;
    border-radius: 10px 10px 4px 10px;
    background: $white;
    color: $chat-on-the-right;
    margin-right: 8px;
  }
}
</style>
