<template>
  <div class="border rounded mt-4 p-3 w-100">
    <h5>Costs</h5>
    <div class="row">
      <template v-for="(cost, index) in costs">
        <div class="col-3" :key="`cost-switch-${index}`">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :id="cost"
              v-model="value.activate[cost]"
              @change="value.range[cost] = 0"
            />
            <label class="form-check-label" :for="cost">{{
              cost.toCapitalize()
            }}</label>
          </div>
        </div>
        <div class="col-8" :key="`cost-range-${index}`">
          <div class="form-check form-switch">
            <input
              :disabled="!value.activate[cost]"
              v-bind="rangeOptions"
              v-model.number="value.range[cost]"
            />
          </div>
        </div>
        <div class="col-1" :key="`cost-range-value-${index}`">
          <span>{{ value.range[cost] }}</span>
        </div>
      </template>
    </div>
    <button @click="resetCosts" class="btn btn-light mt-4 border rounded w-100">
      Reset All Costs Filters
    </button>
  </div>
</template>

<script>
export default {
  name: 'CostsContent',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      ages: ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'],
      costs: ['wood', 'food', 'gold'],
    };
  },
  computed: {
    rangeOptions() {
      return {
        type: 'range',
        class: 'form-range',
        min: '0',
        max: '200',
      };
    },
  },
  methods: {
    resetCosts() {
      this.value.range.food = this.value.range.wood = this.value.range.gold = 0;
    },
  },
};
</script>
