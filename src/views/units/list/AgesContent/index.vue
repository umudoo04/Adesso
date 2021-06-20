<template>
  <div>
    <h5>Ages</h5>
    <div class="btn-group w-100">
      <button
        v-for="({ name, isActive }, index) in ages"
        :key="`age-${index}`"
        @click="onButtonClick({ name, index })"
        class="btn border p-3"
        :class="{ 'bg-chelsea-cucumber': isActive }"
        v-text="name"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgesContent',
  data() {
    return {
      ages: [
        { name: 'All', isActive: true },
        { name: 'Dark', isActive: false },
        { name: 'Feudal', isActive: false },
        { name: 'Castle', isActive: false },
        { name: 'Imperial', isActive: false },
      ],
    };
  },
  methods: {
    onButtonClick({ name, index }) {
      this.$emit('on-age-select', name);
      this.ages.forEach(
        (item, ageIndex) => (item.isActive = index === ageIndex)
      );
    },
  },
};
</script>
