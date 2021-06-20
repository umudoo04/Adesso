<template>
  <div>
    <div
      v-if="Object.keys(unit).length"
      class=" mx-auto border p-4 mt-4 card-body"
      style="width: 30rem;"
    >
      <h6 class="card-subtitle mb-2 text-muted">
        ID : {{ unit.id | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Name : {{ unit.name | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Description : {{ unit.description | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Min. Required Age : {{ unit.age | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Wood Cost : {{ unit.cost && unit.cost.Wood ? unit.cost.Wood : '-' }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Food Cost : {{ unit.cost && unit.cost.Food ? unit.cost.Food : '-' }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Gold Cost : {{ unit.cost && unit.cost.Gold ? unit.cost.Gold : '-' }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Build Time : {{ unit.build_time | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Reload Time : {{ unit.reload_time | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Hit Points : {{ unit.hit_points | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Attack : {{ unit.attack | nullCheck }}
      </h6>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">
        Accuracy : {{ unit.accuracy | nullCheck }}
      </h6>
    </div>
    <adesso-no-data-card
      v-else
      title="Kayıt Bulunamadı"
      description="Girmiş olduğunuz <strong>id</strong> bilgisine ait içerik bulunamadı."
      color
      icon
    ></adesso-no-data-card>
  </div>
</template>

<script>
import allUnits from '@/views/units/_shared/ageOfEmpiresUnits.json';

export default {
  name: 'UnitsView',
  data() {
    return {
      allUnits,
    };
  },
  computed: {
    unit() {
      return this.allUnits.find(({ id = null }) => id === this.unitId) || {};
    },
    unitId() {
      return parseInt(this.$route.params.unitId);
    },
  },
  filters: {
    nullCheck(value) {
      return value || '-';
    },
  },
};
</script>
