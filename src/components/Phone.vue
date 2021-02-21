<template>
  <section class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen">
      <UserTopSection name="Samuel Green" :free="true" />
      <div class="content">
        <PhoneMessage
          v-for="(message, i) in messages"
          :data="message"
          :index="i"
          :key="message"
        ></PhoneMessage>
      </div>
      <WritingZone />
    </div>
  </section>
</template>

<script>
import PhoneMessage from "@/components/PhoneMessage.vue";
import PhoneMessagePhoto from "@/components/PhoneMessagePhoto.vue";
import WritingZone from "@/components/WritingZone.vue";
import UserTopSection from "@/components/UserTopSection.vue";
export default {
  name: "Phone",
  components: {
    PhoneMessage,
    PhoneMessagePhoto,
    WritingZone,
    UserTopSection,
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "@/scss/init/mixins.scss";

.phone {
  width: 247px;
  height: 505px;
  background: $white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 64px;
  box-shadow: 0px 30px 60px -10px rgba(62, 39, 83, 0.251202);
  @include desktop {
    margin-right: 125px;
  }
  .phone__top {
    @include absolute($left: 50%, $top: 0);
    height: 29px;
    width: 129px;
    border-radius: 0 0 14px 14px;
    background: $white;
    z-index: 1;
  }
  .phone__screen {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 228px;
    height: 483px;
    background: $app-background;
    border-radius: 20px;
    overflow: hidden;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  max-height: 75%;
  overflow: hidden;
  padding-top: 11px;
}

.writing-zone {
  @include absolute($bottom: 10px, $left: 50%);
}
</style>
