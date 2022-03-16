<template>
<section class="toy-preview">
  <li>
    <!-- use the custom card to render the preview data in the slots -->
    <custom-card>
      <template #header>
        <h2> Name: {{ toy.name }}</h2>
        <h4> Price: {{ toy.price }}</h4>
       <h4>Labels:</h4>  <p v-for="label in toy.labels" :key="label" > {{ label }}</p>
      </template>
      <template #footer>
        <section class="btns-preview">
        <button class="btns-details" @click="goToDetail">Details</button>
        <button class="btns-edit" @click="goToEdit">Edit</button>
        <button  class="btns-delete" @click="removeToy(toy._id)">Delete</button>
        </section>
      </template>
    </custom-card>
  </li>
</section>
</template>

<script>
  import customCard from './custom-card.vue';

  export default {
    name: 'toy-preview',
    props: {
      toy: Object,
    },
    components: {
      customCard,
    },
    methods: {
      goToDetail() {
        this.$router.push(`/details/${this.toy._id}`);
      },
      goToEdit() {
        this.$router.push(`/edit/${this.toy._id}`);
      },
      removeToy(toyId) {
        this.$emit('removeToy', toyId);
      },
    },
  };
</script>
