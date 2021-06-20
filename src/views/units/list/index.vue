<template>
  <div>
    <ages-content @on-age-select="onSelected"></ages-content>
    <costs-content v-model="costs"></costs-content>
    <table-content :selected-age="selectedAge" :costs="costs"></table-content>
  </div>
</template>

<script>
import AgesContent from './AgesContent';
import CostsContent from './CostsContent';
import TableContent from './TableContent';

export default {
  name: 'UnitsList',
  components: {
    AgesContent,
    CostsContent,
    TableContent,
  },
  data() {
    return {
      selectedAge: 'All',
      costs: {
        range: {
          food: 0,
          wood: 0,
          gold: 0,
        },
        activate: {
          food: false,
          wood: false,
          gold: false,
        },
      },
    };
  },
  methods: {
    onSelected(selected) {
      this.selectedAge = selected;
    },
  },
};
</script>
