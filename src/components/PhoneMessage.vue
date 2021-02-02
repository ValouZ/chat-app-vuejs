<template>
  <div
    v-if="sender == false && radio == true"
    class="message message--not-sender message--radio"
  >
    <input name="time-not-sender" :id="'time' + countRadio" type="radio" />
    <label class="radio" :for="'time' + countRadio">{{ msg }} </label>
    <!-- Probleme d'id des label -->
    <div class="check"></div>
    <p>${{ price }}</p>
  </div>
  <div
    v-if="sender == true && radio == true"
    class="message message--sender message--radio"
  >
    <input name="time-sender" id="time" type="radio" />
    <label class="radio" for="time">{{ msg }} </label>
    <div class="check"></div>
    <p>${{ price }}</p>
  </div>
  <div
    v-else-if="sender == false && radio == false"
    class="message message--not-sender"
  >
    {{ msg }}
  </div>
  <div
    v-else-if="sender == true && radio == false"
    class="message message--sender"
  >
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "PhoneMessage",
  data() {
    return {
      countRadio: 0,
    };
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
    price: Number,
    sender: Boolean,
    radio: Boolean,
  },
  methods: {
    increment() {
      this.countRadio += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 128px;
  padding: 6px 8px;
  margin-bottom: $margin-phone-content;
  font-size: 8px;

  &.message--not-sender {
    border-radius: 10px 10px 10px 4px;
    background: $message-background;
    color: $chat-on-the-left;
    margin-left: $margin-phone-content;
  }
  &.message--sender {
    align-self: flex-end;
    border-radius: 10px 10px 4px 10px;
    background: $white;
    color: $chat-on-the-right;
    margin-right: $margin-phone-content;
  }
  &.message--radio {
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 32px;
    max-width: 160px;
    background: linear-gradient(270deg, $light-violet 0%, $light-magenta 100%);
    color: $white;
    padding-right: 16px;
    p {
      font-size: 12px;
      font-weight: 700;
    }
    &:hover {
      // Le label grossis quand on survole la section du message
      label {
        transform: scale(1.2);
      }
      // Le bouton s'élargit quand on survole la section du message
      .check {
        border: 3px solid $white;
      }
    }
  }
}

input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    ~ .check {
      border: 3px solid $white;
    }
    ~ label {
      transform: scale(1.2);
    }
  }
}

label {
  display: block;
  position: relative;
  padding-left: 20px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.25s linear;
}

.check {
  display: block;
  position: absolute;
  border: 1.5px solid $radio-button-outline;
  border-radius: 100%;
  height: 12px;
  width: 12px;
  z-index: 5;
  transition: border 0.25s linear;
}
</style>
