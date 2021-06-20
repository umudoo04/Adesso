<template>
  <header class="header__wrapper">
    <div class="d-flex justify-content-end align-items-center p-3">
      <span
        v-for="({ text, name }, index) in headerItems"
        :key="`header-item-${index}`"
        role="button"
        class="m-2 text-dark"
        @click="getDirection(name)"
        v-text="text"
      ></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      headerItems: [
        {
          name: 'unit-list',
          text: 'Units',
        },
        {
          name: 'home',
          text: 'Home',
        },
      ],
    };
  },
  methods: {
    getDirection(name = null) {
      this.$router.push({ name });
    },
  },
};
</script>
