<template>
  <section class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen">
      <UserTopSection name="Samuel Green" :free="true" />
      <div class="content">
        <PhoneMessage
          msg="That sounds great. I’d be happy to discuss more."
          :sender="false"
        />
        <PhoneMessage
          msg="Could you send over some pictures of your dog, please?"
          :sender="false"
        />
        <PhoneMessagePhoto
          :imgs="['dog-image-1.jpg', 'dog-image-2.jpg', 'dog-image-3.jpg']"
          :sender="true"
          :class="'first'"
        />
        <PhoneMessage
          msg="Here are a few pictures. She’s a happy girl!"
          :sender="true"
        />
        <PhoneMessage msg="Can you make it?" :sender="true" />
        <PhoneMessage
          msg="She looks so happy! The time we discussed works. How long shall I take her out for?"
          :sender="false"
          :class="'first'"
        />
        <PhoneMessage
          msg="30 minute walk"
          :price="29"
          :sender="false"
          :radio="true"
        />
        <PhoneMessage
          msg="1 hour walk"
          :price="49"
          :sender="false"
          :radio="true"
        />
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
  position: relative;
}

.writing-zone {
  @include absolute($bottom: 10px, $left: 50%);
}
</style>
