<template>
  <section class="toy-details" v-if="toy">
    <article>
      <h2>Name: {{ toy.name }}</h2>
      <h4><span>Ids:</span> {{ toy._id }}</h4>
      <p><span>Categories:</span></p>
      <p v-for="label in toy.labels" :key="label">{{ label }}</p>
      <p><span>PRICE:</span> {{ toy.price }}</p>
      <p><span>Placed on store at:</span> {{ formattedDate }}</p>

      <h4>Reviews:</h4>
      <ul>
        <li v-if="toy.reviews" v-for="review in toy.reviews" :key="review">
          <p>Review: {{ review }}</p>
        </li>
      </ul>
    </article>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
  import {toyService} from '../services/toy.service.js';

  export default {
    name: 'toy-details',
    data() {
      return {
        toy: null,
      };
    },
    created() {
      const {id} = this.$route.params;
      toyService.getById(id).then((toy) => {
        this.toy = toy;
      });
    },
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
    computed: {
      formattedDate() {
        return new Date(this.toy.createdAt).toDateString();
      },
    },
  };
</script>
