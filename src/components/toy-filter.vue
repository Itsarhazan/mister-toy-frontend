<template>
  <section class="toy-filter">
    <input
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      placeholder="Search toy.."
    />
    <label>
      Stock:
      <select @change="setFilter" v-model="filterBy.inStock">
        <option value="">All</option>
        <option value="true">In stock</option>
        <option value="false">Not in stock</option>
      </select>
    </label>
    <label>
      Labels:
      <div style="display: inline-block; margin-left: 20px">
      <p style="margin-left: 10px">:</p>
      <el-select
        v-model="filterBy.labels"
        multiple
        collapse-tags
        collapse-tags-tooltip
        @change="setFilter"
        placeholder="Select"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
      <!-- <select @change="setFilter" multiple v-model="filterBy.labels">
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select>  -->
      <label>
        Sort By:
        <select @change="setFilter" v-model="filterBy.sortBy">
          <option value="time">Time</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
    </label>
  </section>
</template>

<script>
  export default {
    name: 'toy-filter',
    data() {
      return {
        filterBy: {
          name: '',
          inStock: '',
          labels: [],
          sortBy: '',
        },
        options: [
        {
          value: "On wheels",
          label: "On wheels",
        },
        {
          value: "Box game",
          label: "Box game",
        },
        {
          value: "Art",
          label: "Art",
        },
        {
          value: "Baby",
          label: "Baby",
        },
        {
          value: "Doll",
          label: "Doll",
        },
        {
          value: "Puzzle",
          label: "Puzzle",
        },
        {
          value: "Outdoor",
          label: "Outdoor",
        },
      ],
    };
  },
   
    methods: {
      setFilter() {
        console.log(this.filterBy);
        this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)));
      },
    },
  
  };
</script>
