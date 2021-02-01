<template>
  <Description msg="Welcome to Your Vue.js App" />
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description.vue";

export default {
  name: "App",
  components: {
    Description,
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
// #app {
// }
</style>
