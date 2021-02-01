<template>
  <Phone class="app-phone" />
  <Description />
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
  background: $radio-button-outline; //$app-background
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}

.app-phone {
  margin-bottom: 50px;
}
</style>
