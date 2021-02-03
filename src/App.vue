<template>
  <div class="container">
    <div class="purple-shape"></div>
    <div class="low-white-shape"></div>
    <Phone class="scale"/>
    <Description />
  </div>
</template>

<script>
// @ is an alias to /src
import Phone from "@/components/Phone.vue";
import Description from "@/components/Description.vue";

export default {
  name: "App",
  components: {
    Phone,
    Description,
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";

.container {
  position: relative;
  min-height: 100vh;
  background: $background;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @include desktop {
    flex-direction: row;
  }
}

.purple-shape {
  position: absolute;
  width: 510px;
  height: 1018px;
  left: -322px;
  top: -509px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  border-radius: 255px;
  transition: 1s;
  @include desktop {
    left: -90px;
    top: -318px;
  }
}

.low-white-shape {
  position: absolute;
  width: 510px;
  height: 1018px;
  right: 0;
  top: 427px;
  right: -323px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  mix-blend-mode: normal;
  opacity: 0.03;
  border-radius: 255px;
  transition: 1s;
  @include desktop {
    top: 119px;
    right: -185px;
  }
}

.scale{
  @include desktop{
    transform: scale(1.3);
  }
}
</style>
