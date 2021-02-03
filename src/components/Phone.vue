<template>
  <section class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen">
      <header class="user">
        <div class="user__content">
          <div class="left">
            <img
              src="../assets/arrow.svg"
              alt="Get back in the app"
              class="arrow"
            />
            <img class="avatar" src="../assets/avatar.jpg" alt="Avatar" />
            <div class="left__info">
              <h2>Samuel Green</h2>
              <p>Available to Walk</p>
            </div>
          </div>
          <img src="../assets/dots.svg" alt="Tree dots to show more content" />
        </div>
      </header>
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
      />
      <PhoneMessage
        msg="Here are a few pictures. She’s a happy girl!"
        :sender="true"
      />
      <PhoneMessage msg="Can you make it?" :sender="true" class="last" />
      <PhoneMessage
        msg="She looks so happy! The time we discussed works. How long shall I take her out for?"
        :sender="false"
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
      <WritingZone />
    </div>
  </section>
</template>

<script>
import PhoneMessage from "@/components/PhoneMessage.vue";
import PhoneMessagePhoto from "@/components/PhoneMessagePhoto.vue";
import WritingZone from "@/components/WritingZone.vue";
export default {
  name: "Phone",
  components: {
    PhoneMessage,
    PhoneMessagePhoto,
    WritingZone,
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

.user {
  background: linear-gradient(225deg, $light-magenta 0%, $light-violet 100%);
  width: 100%;
  height: 66px;
  margin-bottom: 11px;
  border-radius: 20px 20px 6px 6px;
  position: relative;
  .user__content {
    display: flex;
    justify-content: space-between;
    width: 196px;
    @include absolute($left: 50%, $bottom: 12px);
  }
}

.left {
  display: flex;
  align-items: center;
  .arrow {
    width: 4px;
    height: 10px;
  }
  h2 {
    font-size: 11px;
    color: $white;
    font-weight: 500;
  }
  p {
    font-size: 8px;
    color: $sub-heading;
  }
}
.avatar {
  border-radius: 100%;
  border: 1px solid $white;
  width: 24px;
  margin: 0 8px;
}

.last {
  margin-bottom: 16px;
}

.writing-zone {
  @include absolute($bottom: 10px, $left: 50%);
}
</style>
