<template>
  <div class="container">
    <div class="purple-shape"></div>
    <div class="low-white-shape"></div>
    <Phone />
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
#app {
  //$app-background
  min-height: 100vh;
}

.container {
  position: relative;
  min-height: 100vh;
  background: $background;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}

.purple-shape {
  position: absolute;
  width: 510px;
  height: 1018px;
  left: -322px;
  top: -509px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  border-radius: 255px;
}

.low-white-shape {
  position: absolute;
  width: 510px;
  height: 1018px;
  left: 188px;
  top: 427px;

  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  mix-blend-mode: normal;
  opacity: 0.03;
  border-radius: 255px;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>
