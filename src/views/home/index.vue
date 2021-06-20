<template>
  <div class="text-center">
    <h1 class="my-5">Home Page</h1>
    <div>
      <img v-bind="imgOptions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    imgOptions() {
      return {
        class: 'rounded img-responsive',
        src: require(`@/assets/images/home.png`),
        alt: 'homePage',
        width: '100%',
        height: '100%',
        loading: 'lazy',
      };
    },
  },
};
</script>
