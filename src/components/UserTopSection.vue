<template>
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
          <h2>{{ name }}</h2>
          <p v-if="free">Available to Walk</p>
          <p v-else>Unavalaible</p>
        </div>
      </div>
      <img src="../assets/dots.svg" alt="Tree dots to show more content" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: String,
    free: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.user {
  background: linear-gradient(225deg, $light-magenta 0%, $light-violet 100%);
  width: 100%;
  height: 66px;
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
</style>
