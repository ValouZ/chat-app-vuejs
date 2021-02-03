<template>
  <div class="writing-zone">
    <textarea type="text" placeholder="Type a message..."></textarea>
    <button class="button-send">
      <img src="../assets/arrow-send.svg" alt="Click me the send a message" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.writing-zone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 213px;
  height: 33px;
  background: $white;
  border-radius: 20px;
  textarea {
    display: flex;
    align-content: center;
    margin-left: 20px;
    resize: none;
    outline: none;
    border: none;
    height: 100%;
    padding-top: 10px;
    width: 160px;
    font-size: 9px;
    color: $chat-on-the-right;
    &::placeholder {
      color: $placeholder-text;
    }
  }
}

.button-send {
  position: absolute;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  border: none;
  background: $main-heading;
  right: 5px;
  transition: 0.1s;
  &:hover{
    opacity: 0.8;
  }
}
</style>
