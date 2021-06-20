<template>
  <table class="table table-bordered table-hover mt-4">
    <thead>
      <tr>
        <th
          v-for="({ name, width }, index) in headers"
          :key="`header-item-${index}`"
          :width="width"
          v-text="name"
        ></th>
      </tr>
    </thead>
    <tbody>
      <template v-if="units.length">
        <tr
          v-for="({ id, name, age, cost }, index) in units"
          :key="`unit-item-${index}`"
          title="Click For Detail"
          @click="getViewPage(id)"
        >
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ age }}</td>
          <td>{{ getSentenceByObject(cost) }}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="4" class="p-0">
          <adesso-no-data-card
            title="Kayıt Bulunamadı"
            description="Girmiş olduğunuz <strong>Filtrelere</strong> ait kayıt bulunamadı"
            icon
            color
          ></adesso-no-data-card>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import allUnits from '@/views/units/_shared/ageOfEmpiresUnits.json';

export default {
  name: 'TableContent',
  props: {
    selectedAge: {
      type: String,
      default: 'Feudal',
    },
    costs: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      headers: [
        { name: 'Id', width: '10%' },
        { name: 'Name', width: '40%' },
        { name: 'Age', width: '10%' },
        { name: 'Cost', width: '40%' },
      ],
      allUnits,
    };
  },
  computed: {
    reducedUnits() {
      return this.allUnits.map(({ id, name, age, cost }) => ({
        id,
        name,
        age,
        cost,
      }));
    },
    ages() {
      if (this.selectedAge === 'All') return this.reducedUnits;
      return this.reducedUnits.filter(
        ({ age = null }) => this.selectedAge === age
      );
    },
    units() {
      return this.ages.filter(({ cost }) => this.getDesicion(cost));
    },
  },
  methods: {
    getDesicion(cost) {
      if (!cost) cost = {};
      const { food, gold, wood } = this.costs.range;
      const { Food = 0, Gold = 0, Wood = 0 } = cost;
      return food <= Food && gold <= Gold && wood <= Wood;
    },
    getViewPage(unitId) {
      this.$router.push({ name: 'unit-view', params: { unitId } });
    },
    getSentenceByObject(object) {
      if (!object) return null;
      return Object.keys(object)
        .map(key => [key, object[key]].join(' : '))
        .join(' , ');
    },
  },
};
</script>
<style lang="scss" scoped>
td {
  cursor: pointer;
}
</style>
