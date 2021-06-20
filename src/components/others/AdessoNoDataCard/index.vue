<template>
  <div class="text-center border-rounded p-5" :class="{ 'bg-light': color }">
    <br />
    <span v-if="icon" class="display-3">&#9888;</span>
    <p v-if="title" class="mx-5 text-muted" v-html="title"></p>
    <p v-if="description" class="text-muted" v-html="description"></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AdessoNoDataCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    color: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
