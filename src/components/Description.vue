<template>
  <div class="description">
    <h1>Simple Booking</h1>
    <p>
      Stay in touch with our dog walkers through the chat interface. This makes
      it easy to discuss arrangements and make bookings. Once the walk has been
      completed you can rate your walker and book again all through the chat.
    </p>
  </div>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style scoped lang="scss">
.description {
  max-width: 311px;
  text-align: center;
  @include desktop{
    max-width: 445px;text-align: left;
  }
}
h1 {
  font-weight: 500;
  margin-bottom: 24px;
  color: $main-heading;
  font-size: 40px;
}
p {
  line-height: 28px;
  font-size: 16px;
  color: $paragraph;
}
</style>
