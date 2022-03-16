<template>
<section class="toy-list">
  <ul>
    <toy-preview @removeToy="removeToy" v-for="toy in toys" :toy="toy" :key="toy._id" />
  </ul>
  </section>
</template>

<script>
import toyPreview from './toy-preview.vue'
import randomChart from '../views/toy-chart.vue'

export default {
  name: 'toy-list',
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
    randomChart
  },
  methods: {
        removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
