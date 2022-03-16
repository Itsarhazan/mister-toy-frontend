<template>
<section class="toy-app">
    <toy-filter @setFilter="setFilter" />
    <router-link class="btn-add" to="/edit">Add a new toy</router-link>
    <toy-list v-if="toys" @removeToy="removeToy" :toys="toys" />
</section>
</template>

<script>
  import toyList from '../components/toy-list.vue';
  import toyFilter from '../components/toy-filter.vue';
  export default {
    name: 'toy-app',
    data() {
      return {};
    },
    methods: {
      removeToy(toyId) {
        this.$store.dispatch({type: 'removeToy', id: toyId});
      },
      setFilter(filterBy) {
        this.$store.dispatch({type: 'filter', filterBy});
      },
    },
    computed: {
      toys() {
        return this.$store.getters.getToys;
      },
    },
    components: {
      toyList,
      toyFilter,
    },
  };
</script>
