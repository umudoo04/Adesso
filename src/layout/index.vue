<template>
  <div>
    <app-header></app-header>
    <div class="container" style="padding: 6rem;">
      <slot></slot>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './appHeader';
import AppFooter from './appFooter';

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
